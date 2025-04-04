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
    "4HKcWs1VT54JYWLAFwzFcE4jtCjNaLbhKj7SMUGGL9YLGP9UPFmZmdggAXuaVbTk43MFusG9yEQr9x1QpTwNprUm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BLWQBV9KcKWSXxP4B2pttCRcKfbDkqiSVXxi9iMYLaSbLqdWyaamz1VT5VBHYRHC2sHmr7bPtEQjowmFTUB8ygm",
  "key1": "2N1g4c6ZRxCRVzfi8gXEjiiL7sp8PDuyjDBJgj1XqqRSdtqHDJfmCmwPQmnrcLsmrkundZHSL9p2FLZuoCrxG4TZ",
  "key2": "43p3Z6bx8KodoAV9tWZKjYSgZy3GFsjHtQGbnCVeJGo2cJbSnUWEm1xLBowPi4cwv7ipjAryBYzgqicr5R7zy4Vh",
  "key3": "5NQhtxrsHCs6hxJkWZfHrSF1Yyh5e6keQnKFzMQidhqeTeCMFkrrXNpXDju2n34tmmG6HaEbvEQ747tvBjFXeYe5",
  "key4": "2KKkypYzLp9auL8o5876BWW9bV9x5MN5vGs3pQxHFEZrJVGcGWT2Jo9djHDQbGhV16o4NeX2oLcn6nJdcTYAVbij",
  "key5": "3Yaogj5eEwj4G4Q36Kw4EqLEA1n5eczhxb7fc1E96EiwMrjKLRPgszEE7CYyMiX4gC5tAGHuUEgAeyGrGJS3JWJT",
  "key6": "3cMytUQydrMC3NNgUBCCeZjfTVV8Fu4Cq3xakCM8FgUQWVBZwfMohiMi3dNm2spGAMwCG6mdvhSqT2qaePMh9ADn",
  "key7": "27gy3s2kVebb1kejrFNgpfuPjht3VV1BCEKRAtrsqcxqvp1WtugLPqmCcKLjMDHGoe416hGK3oMsYK1YybqhLohk",
  "key8": "54rz8DcAiJvyxiwGcjfXJY1izkGCrn3oRKHRJWLZ1yiDusS8yNwXGL71uDS4pbtDtLuSedcAmi1ZaRx3WVki8XDN",
  "key9": "HDKDPwopgadMUDpfjkZBCcgZLV6PTkTofYnBXMxVUy3juq1Es88RnDqQoNRYXzomU7nXhXdaLNMeswZ3XkY6Jti",
  "key10": "pFAxHHpnLKwmUTZQoUaPPPhTDbUrx6HSqG1Mm7vtcrLAfbGMn7iSWqkuZtMXYTMFmeWpdrHoqyEjqqhPZDZG8N7",
  "key11": "3FoqcLZoSufYzYu5GXJz3QKNm1mHEjsapnXQuknfR8DoRmRY2dmeUeT1g87ubM8qYYNJDc5XxQyhRm1ogJbHEm1y",
  "key12": "pP8w8Cy58JYA5JYLeDUuhx2WAqfjDrS3Gi6gWYwAQAHFVFFuwfugC84ymxRQk339SmvpWvMKhN9QMBe6zEcF2QN",
  "key13": "bRcwCif7Md8LXwRrZu71Ukp4k4djqrFndTFHLoa8f3xwbxUMBLAG6DN3ShWDs1LPSJ8T76hkdaTiTrij8PUik7B",
  "key14": "UhSaQjrFBLdQogwLKDjN1p2z9wiUg7Qo1To3FLXgYwjQxjggKoRM9V6zgWRmYKQmrmCdTyisvPYQ8QpVDjF5PMh",
  "key15": "2dd3jxmGCCFWwQ4uTssKRFPVGmpNqpdaUgxahtZrCFzdpVgqvZmVexZSKNb72r6U6R2xnWzWdNJBcVbxmVVBKif4",
  "key16": "5uq1TPBK2fXVBEUkKCjKjRbhvxQUVj5ixWcpCkR7pTtMs92a3mCHccUJrXpTvkxtZjmbPSbHq1rT3G14wP8tAhTA",
  "key17": "3kdTLffsUFDX63zc4QW1Jn3KUWndU5Xog6Nq9ooFMfJzUWQ38CCNXxBJ9ZrEJ2btabKjr74qHL2hMBUG8pu5GEMy",
  "key18": "2Y5NGbkdL6o2po9Er2EbP1AyndpfBQziU1BVueUEso3ShQ7Jmu4PRtcY8pq2sA8bbuSiB77gR7gQyxbbPFCi4EBD",
  "key19": "2ms7F4JSc6q9g3goX689JK5zEGoiCrpbwU6U6sSUmMytCkFavHpDKgErpf2XYDGr3MkUXynZhprhf4ew88fAuJuf",
  "key20": "2yjNtAf6vpDoKHs5GnQ3UVsKDBK4fMNcV6YNhCyo4cxFeC7Yk8WxoCoZuF8V8YfnnCTFNxpJR5h5gSkamePin6Lr",
  "key21": "4kjLYRCxFdVvAyRZQcEFKkJoHuTXAeZb4GYPUvVZUGe3Si8xhcXQVvVYaaE6nCSMAqftQmzeiyUXxmQtfVFsAV51",
  "key22": "4RHcTj8BkiFo9rrXpecqkGmAbwRyFKzUGxC6ypmSqCj1u6Ef9vByHPMbGvC3JuzkxF7GAR3VDHZa8ujEedWsbWfe",
  "key23": "vWS9oqwdTbRMu9jWnmjVydtb2y3HDmfs6jEN5MY2HdeJbEjmeQ4RrQcpF1WrjgQZbxZgpGda6PGB3SuyrF5g2Uf",
  "key24": "3yVSbtiHWgkocqfZFLqihi5YZUpAKbY8KTkjb2TaDV3J2imBty5gxVT9Ud5EDwuJWV8UBPt9aFADYW6cJ4JwwCfR",
  "key25": "55ktdcdbQ5E2cEgvCCXebTkvbGtVWYbAny1MF5Rc3SU7EknzhbK3e15E65fUcriyxb7Cu2J66WGibKtVaLfycYCG",
  "key26": "2d7vMwu6MSiSAhGopzZpJ7w1G9H4VSDxk7JDnDuz12eyavd1fzmkLmcQypLNhYnLeX767RVUHQMiLvwYXxR82U35",
  "key27": "4Z9wF1gey1rtgnPkviCnsNWEK2PX5AKXUJYbY6BFpTqKNwVzDrYvFYPztoH4MJYRdzdqKczFk47ERUBNWiWPe6mP"
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
