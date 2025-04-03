/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "ynRnMf9U6dvJMtc5KcgC6jvaFjmUN6nJWdsAVfR1MdsDvUqdAf2oZwLwcGZQd9t6G6CtWYzb5oqj2aJw5qy13RB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jrk9i3GFxkqSK4KihqLBv4sWzKC6n56nCzwBfXjjYDRdywHyonshns9m62x9sij7knNuwWAL7vZCHoJLwkiJrSK",
  "key1": "43iBFrecZQD34FQhAKnSb96RysxMEsCVBT18KHqtP1wo3qRdxd4AZ5H9cdgeup459GM4VA6kUvybruoS9pvmFLAj",
  "key2": "5ERw84UreggRpbRRQH3zAsoxJYmMMXXFLCXrdCzCN29REFewCzVXrJPaAj5CMT46PKtULQaN9SzHrq4vSdmgYGQF",
  "key3": "2LmQxFFvEpULWFw5n4XrvNRUDgQuDyLBXrTLEF6HiqH1aRTCr2cVHspE93zLreDFEQe4txAd4zmjFXy9HS9Sdwew",
  "key4": "2vSFg7o2D9SeMrX4wxNoWTgoRpCFf2ghxqD76Sn7Vpazaa4mpQeoiE8bYxMJMdJCfQnwD2wBu7pfT8PYY5s4UqiW",
  "key5": "43f4JMq8XPLS2NZszhViKe6fgFXCo9GCgXr2vXuLHeMK6BT3yxKSuZ1EGTVkhJGpiVbfA9g4riQcNXFsz2PdcDip",
  "key6": "32XxcDHk7SQKSExqnaXzKPUwGi3FyqcbwLPCX1Ek4QZPUM3GD1ftRKEsrUd3RANqV6q1naYcCkh1cELEs5bKyLdk",
  "key7": "3iyg4HkHtGzWkEKsnLgjnaPEeJryAZZc8ryM3hhRY1XBUekESBUkfm4UfKyHN6n5LcpciSfFKNPCyzbjwjMuFhy2",
  "key8": "9aA6URfNUfE1z5HVKURWf1ZsWgcaqzDkFG4t5MWJJ545jW84Dgz77uLHBqWAw3B6vtXWjiNSFVvQ84c97ar5sCj",
  "key9": "2JAPKR2h961uNFMKNMmEnjJcBHHwESnJN9dHaecchs1VgWZuhxeV35egEqBEcZsWeCR9Ab6EUvrKcmuqgtmLKKZ1",
  "key10": "63fz76wWY1mYVPp7YBGwMoKB8UEW7wGXWP5sKKbSoxHnZg6LBRTapFjPSV2A1hUvthDtWD9Cy31mMZfkCsVbjHXB",
  "key11": "3PiykYADH6Krg68jo8J2QMs2joy1eszQVUDJqx44n6FTm4SfXMuXXiCN9Fj7dtU6aNL6gc3kHPRt9eQzTY8a1mGH",
  "key12": "3qYgdvqik2Yd89ARqYX72PfpcqPcDywguUJXaviuuhFfG492DvDFwPkgbZfzLTTjxrU3q4aXfDW4tx1i97D9uXoL",
  "key13": "2C3Wiy4YEvA4z9qWdK3JknEzTe8uCkcLnXGZmsAFwNmPvc6KKezvAhz139Yy1Kufsw38N2wqSx5sp9xcwLMxMtqY",
  "key14": "3kSBViGyJqw7Z21mFMpVPKcautPczp3h8N6Bv3w514T5nkFybV78KD1d6WcdJaYkc7zBR1Xmcb3hL6S6ewZoe6xc",
  "key15": "dHfgDCMAGhcYEy4oma2TR1tDXpoE5NYZLb98tRN5V3VFuyWCkpHJKBm1KPUUZWeAWVNAKDioUjwu3TS3jFVcTmt",
  "key16": "21WwQqoUMDE3HwUGbMUV6zgRUTPwuAv5dbo7vQucxUHyNbRMHs2kKbfXEbrqmdME65Nwp5DWb6Ebs3jeKqGgzcbK",
  "key17": "26WEztjNwRpwXd3TuPqFH2ZiGRMCfdLWq4cRmP2LMS9e5BX1GnZmPkBmK8x3pVAo7YWxepokSBv9TAJBAGTqXcxD",
  "key18": "3pW46Bgff3WGCb1SWLkaxUFcNZtZdyBGugY21JdkrrzwyerDJHDiXJir4DgianiWF3Kdum5Z5Zm9vdMVCxeobXPD",
  "key19": "3oCzzKWHPTSBGvNN3xqz2Q4Ket2DL5nk6LiCcnx4K6esiByBVJeWuM5EvE5oJ9scRUfQDRp9N8Ch5dXJEr3WHaeh",
  "key20": "4Sy1zbayRLqAD7ZbQb8JW4T3n2ne1Uk36DFT7Ey87XwKNEFRN3iXZBbYAeqsT6Rayjn3oQQFnpEu9NvsUzonNypZ",
  "key21": "2XH5WbdF6M3DDNwsuvruHqMWgNzU8rdSoa7AQk39scNW9FSPv2wSYP5vjqPYLCddLhDj7fRdozvhPnhoLw6aSnUh",
  "key22": "36ta3iqn6DStTnN9LS8gbDXx5GHfsKqg24p59XkcDr5Xt4nPqDk2T7DF2AWCAqnjN79jxWtgM78yh4d5uAGYAaEJ",
  "key23": "2Xq37rMcKZ3S84cXaspfxqFPZxQ1w5PuyrS67XuUx6yv3nAE5emJs5G3kZLdSxNNN8NX9L6KRSX3Ngxd35W5Gyug",
  "key24": "5svi7MLNoNfrjS6yPvgfACZnc4LmZu9tyNR83oY7QFYqw3NrCxpQpzbU59W4KSFE2eLmYdUvu46RvVVVXUc76b1G",
  "key25": "2tHDyk6HFJL5wzNwjJCkD9rrt2j8weHsDRzZf7V5Rj5371iJuuhEX7sYDx6EoiRH4pqMVGASNfW21Db8DxjEoS11"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
