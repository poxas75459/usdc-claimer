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
    "3fxznedL6CUUWAAwdJjE59RUjCxw4fYAg6v93KUHAyqFybBty96beRHtpE5JEY5fp2pDAANg47z4CHozNycUsLX7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rUetQenJGzRJ1gXGNdWWbByjvxMtgkn9R12yqeu7VGPVu13tNUjvj1cHadhNvS7yziWdm6DWNTkXNGGDbxiGbuB",
  "key1": "uMk5RumMVYjREecp7DUE7JSRyUSM9TRDSRTaaxiMGK5bHxZre5NDNjZJFoftL8pQj6zat7PXq1i8zosqzhxRKxY",
  "key2": "2ALWiMHk7g3wgtA6ScrvCMK1hb92VMrckKg3DMgu8mc4hVH3cy7P12ZzaY5v3kyqY6rr14zYqzH8dfh4U3oyF9AY",
  "key3": "5vwhvWsgTMf9HJaK1NCN7MeVYWS6xiiEoR7YjtMqqRSjNFqkSgnGBnpT66Zt4PLcugGRPHLYokSCYFM5DFjyPFmc",
  "key4": "4hroRsnUSy9mq1EhErMprGcsjh8HK5DcKmm8gNkzqKapMcJCjfipyho27L5e9UGxoR6yE5pNEzu8u85E35wTPpsV",
  "key5": "3MiuneUmRTnHm32bXd1UDUkvCP89E3x6BjFx7uemLEQ7BWJsJBfPZXaVw3fneRnThsjacYmFTM7MGCgoigPDN3CT",
  "key6": "3vQUu4HnnEjq9EAyeRDwHkJb7vn1xaaNGMhLCqwWKwzF6z6WVVWx7oWYfkC5Hjq9moSQrbDcD6jamn2XSmuhE6xv",
  "key7": "3dg7rTHiQFFGuinH8b4szm3CM52x2rxoReZx4CeqkRBZneccpPTMqLur8GaYksyGoPskrrreBtznC1dHznWJokNy",
  "key8": "M1iBypZf92Dhr1BKj5E2jHG7dc8Wz4PzFBiJtfE6joH83du5GMxVgRAM27d4tMugVRat59cBG7shvgK6xkENtkV",
  "key9": "5rLSzSXFzVBPD7ietfh8g4cmYj1KYc6iYhT1tKf6jnmAf6dSXc7dJyeRjcXhvii27u9JLz9h9z5riwXRKp17g8jf",
  "key10": "5vzgjM66i138mEtd4vY7sSADipd5JNwxvoz5ZnXbavKAc2LfFDV1RbVVGfKHTi6atArYbEErcyLhVJUGcSZFoWfp",
  "key11": "3dAdDj1bBeTEgNSNFefL1GoqwiuuSqYgnLK7n13XuyCovF2gdiB5Z8ntnzPvF417UmUFnm7vXSkGf4WEYZeDPioK",
  "key12": "2VFFJv7WdTSWfk9WvBwShPQp6nBCdKWq8NiBVJ4RWoBrkeR6D7C9JDv3mXHMWf5p2tgm9WFeEm4W32jENUrUBimd",
  "key13": "xMDU8LoS2MVTiGh2xx2auRSpqvGH9uDnHA9xMTJWHhr6JZ62rLYyk8MTQM79oZ2qon9AkujNRk9hnBumquLC377",
  "key14": "3XHtPEzX4wUQ6F1kdh8JxoRXcKR6gwRmWgsivWdQbGc4guf4bESzFUaDHDarS3Wjj3xzStBbfvWo4pooFzv53aWG",
  "key15": "WAwmEFShkhxCnzrNSRxNbVpEaWLeKCpd4b85zYn6fvE3Ua3tju31ZggqbUrH8ZmFBkoiWfeAcCLqTsber2cWEm2",
  "key16": "w817MfCw7hL58iei7ubZuXcBL8mMwhZnUgRANrzA7Tq6nnmu1JNovfKyYgF3n9G27q84JRXhXtMCDpbyefPiv9u",
  "key17": "5xMupV6ectD3cbCWFLnShWfhSfzaoPpqmgDpKo32j3i3Vcfsf4iTJz7161oUrM1REym84GGaweuguJ28LWHnJHRP",
  "key18": "5RpV6pr2Cs16dTcULocYg2k3xbYY4jE4ftkCMTiVVVGgxy7f6Wec7r8787Zkhz6J1KdY7yRTrNAdU317B1htv1Mx",
  "key19": "1M8KhZv7gycDKEdtP5RGmcvQHizRmwnUmJQK8xy5GaTcuRgKMjkWZm2MWshy5hbnhJQSMMHHVsSbmAC4jA3RBHr",
  "key20": "5Ne5ndVqY7cyMJbm7J3e3WUNdP9niaBhgnBhoLgqrDARFyc64UV3j38n4AP4ADiy242fJDnSrK8NCJaJVa97ZFu7",
  "key21": "gNRRJfKH6zetjiEhh8NofpgDmPChr62HLsgR4aaC6THHyNCvyGiYh6HXKazgHzAtSj966sZbhksfrJgaianvdzD",
  "key22": "3bo7oRUsopKEBzR5gvVXjq9KmYFyQEsHetc9dT41frowwnzHPvKoAVHsNtYRddZmDjmLGeqxRdq1pWhriyCWKd5K",
  "key23": "661qDnk29wN24AKKpPwYA83LintUZ7SNA4SvqhtDiehqjdj16Cnztqjd82NUUpQSmNC6n1SEm75TQCPgq3oWDMdP",
  "key24": "2y8UszEbxcsPPRkRRR7LxBFrujfCF2UWaqcJuo6YcZXcQT2KSk4RmLY3Xh5jaHv95hPw1i3dgHuhLGsK4Wyhrpef",
  "key25": "2gFw35VsvNXLP8MVULYQFRioyunjM16Qgu2HzmzZikJGSomfm92XWfW2mdfZGRqXYLZQoSfPwB6Xhk38pB8zdD72",
  "key26": "4cjreJpXooQQ3REehsubQGeJ4sZxVSShbeTpTsqdZFnDwUs9cxxDEKTbXsuvrXoZNTfpxft4ZWCHC6CbrNmoKjTt"
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
