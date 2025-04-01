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
    "cLrGzvQyDEMAfGUXoBK3BviCdQMXY9ULGUPaDDdf6KisgBscamcEMxDie5rq5ruDZzU81ny7g82vstoeLGQpL1i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GQJ92U18zBRQtBNwc3ZFqe69Vq1DF3JkhRSgFrdbwXogreFhX6yWpTV9LPnjMciRAm2he5fpRwQghN2DRvXNNpw",
  "key1": "3h2EUJtgc6jVQ3zJtHExHCwtNMsCdAfLudU9X9FGwGSGANtE6NXzrekmQHmn7SKtsRh4gnT29YikJj5vCiSvRuWJ",
  "key2": "2Zhmsk9B1RxHihnGFbnyC5ARaZaeo3RskFuvo8T6mkstNxY7FQuUQMTeA88yiq9AGhZ5FhVJ5HHmSa4EiYiPVc4u",
  "key3": "2rkxfKtgu3r6PanCjqUGp6XA1SviqU65S15rTS2TuQmDyvAmQ55jzvJ1wuUEZYSD6mNsRmG3tU2woGVBrzqPWvQr",
  "key4": "YsezapkATjTY6SadosdprmfCGd7dpUGst4ds8QKN8yZjbKMUfKCPnnKJX6zTndE4auz87LU4v8FJTbTUL17Gzcu",
  "key5": "4XXsbixUd6xBWVm7xYLWCpYqrEcnQbbNZSDrDkFi7oyVykQiMFkk6VHK1uRGg2fBiFrbd2ANnhUNVEFFZ7mMAFWk",
  "key6": "1hK7TKiu5KiGWHJFvtMZrreZE33Gi8okCMTn4FPWxwc6ZRdvsqYNZriDHYKvT6oGGDDGeh5TNix82b7zpYSoYGj",
  "key7": "5AzgjaKmDtGMn2CAaRtYHEuCe8pDaqdZKWEsZmqRMC2acnev2wEDVdP49MCUhJkdV6GbPDVnmPzygaix565cg52S",
  "key8": "NCUk3N1u9wobwfqaZCNvf7Zqy4gSYsYyoF4KiKC6gD4QPGgVJofV3CamB3E6fPhTBBUkrSCMenAcbTTePCXLQ7T",
  "key9": "5pPt3b6FmhoyhWE5KSDibZMAQSyZ8KkunD5PFB6jSL7pAyG5EpzBacnYrhLjPrV5Z6BFbwZ6UZ4LwL6SRyBJJjTr",
  "key10": "rQzSbGNYRwjYqLU6j6RQyunbetW8UJ3S2Vmw4NfTxJ1wjcys6EQXU7985XoUydumiQZVecaCP5BKGzXSjW2jpvK",
  "key11": "5ukcCPheWcv52ubCE85Kw2PL9hyNLtCLsDPjZGA8suuYXKVb4qnrTPQYDBvoZDBujdmVgb6iXuaN2C7gH7ysRoaa",
  "key12": "25L3ueWSc3kQU5yASYWKr1NbgjGggYubt51bpH8wmH9ak6iHGJoHBrQZaxfJaML3rJTnX2F582vVXXSk29zm2Knn",
  "key13": "65NbADLpjpu9pX3nuuT7rgmZtBRDjuthevQptUpuush1xBZ3ukUtYj4ohtkfdxeqePJt7LkqWprTap9Bqid4e9FY",
  "key14": "5FiTwSDtwpv7QLUknnYYXc74HhgwspH9LZ8CavEbz8rDojSDqqy4Rd3LkkLxfnYPr8eK8WRPJGYjEFDBpAz1RKmZ",
  "key15": "3Su4VwmvtDH6DKQTCScofdFWvQPA39Pask8ajWrSJAdKyhfvB59yMufjT7wDa8awAZqMMRgCpKyrFdoWSViJN7eo",
  "key16": "3rn7Y3JpkbL2XNRHhvePrDrXzrHX7wVEcMyiT3dwXGiUiMSSZTX4hw3Sj4cVauprCPET81AuHH5jWVYVQfmMAhq7",
  "key17": "kiT1YwqJ9T22m45MuoWzeCcwGrFiuJyFT7Prg1UyxfYUp41fycZ8brUy8BEmpJJhRvW9T4VE8zgSogGbc2xAAfo",
  "key18": "4Y6mcjmENDkmkd7N5HFTQ4sVXDAMSih5nkTtcS8wFExRVZFVrUK7xwiMukaJB4G8pHHCe5btdURDBEPJQEZDG23D",
  "key19": "2L4CDgBE2F3kzDpntW42FrCMNPiXygrtj1oM4grCoo8aGDwmrDFvs9jwMaNn2uqkawcSgA1ZvUk77QEBSZp5A3r3",
  "key20": "2gUB82HuoPKRK5EKvCpFTaBjPSBaRiGLAks17Zvjkf5efZPFDqorHpqzZwMbHkwSvErmex5bfzynVX4ka6UEZrru",
  "key21": "5WjmFCNpdWQrxGFcp9XSZ2LdeDy365M8WhaNxrNmEuH6kcAdR4t3hnnsccDpJ6FNBv3KKi8NBLtg8xg71VcWwPud",
  "key22": "5Q74oR9mLkigboKz7e1Q2Yt4dbZPvEji1LnKpgGBeGw2Exw3QeJ1qAYvdqeqZ79fQVZnjNzeyrdZxdMDNXLzroBe",
  "key23": "3Vg8zY4MhUeNKtuSBazqLhEFo4PWb2TszTHWKvhZ5VgHtY12J6eVcQs8GefxFmf3SbVae4aAvK521mawFiejneqe",
  "key24": "4J81jVn5XhB8e4g6FgiQP5N7ftcxydWGjug9HAKkgcsxUWLndZzLJHFiGYHjTgHzKaAkKxUH75QC95VK3pkUVLNY",
  "key25": "4EavLZJeDoYJafiZEVUT9beVVvAPmwdfJuyKTv5epTxrJpVASi1dRiQ9qbw9eK4J2tUCzE49G82zfTaCnFFzDLBD",
  "key26": "58dL2F8wP9epH7E7FEhS58VuCzjFU1SK2wscfDU3H5CYCr1qhxukC7JDRuLU9ZqK8eu8dMFUxjafrbENXZrhJJu9",
  "key27": "5XEjMy8iTRkn33EohJ3iWCtmfdVuJi4Lui4WN91QzRymSRzRrz8M2EhhafARJvJsvwffkv6ZzEEBcBhd96noZuz6",
  "key28": "3dCKj25KydsH2GsEicPsRnLsyYQ6QWUSdU7oEmEavi2r8m8WF87s9iAh2nURkFhp66aYfuXb63zh3EJdU29yFyWq",
  "key29": "5tjYkKrNQAKLchxkB1C97gsJiFAXNrAUv1cNqSoppekWh6M7AA9uThp6Thn5kh5QjTBMpGirHcSnqz1sZoBH2JSE",
  "key30": "5S3Q9f7MWuvtPMyt3cXNZm41pFyyN4qYH3hGRY2N6aR99ysdjYYvyimtGafbSEpPjzwMFPhj9r2H5bRMruMdLmNR",
  "key31": "4pfx36wE77t2JsnzME4aKZxmpviTtrDNzFcsdXVWzD8QnBqMbS48s4BxvhRPJzkUCUVdbAsX6MUhtcg6v37obwc1",
  "key32": "63ACkG8mKjfyTM7MYHudmZQKmsTD3DZVqVUWwQv86i8SkeaS5XFp6j4R5sWxyQYn7ysERmfj39tDhRM4cPw4obdq",
  "key33": "63X8HtHzULX13UhvJoE5Z2A6sf9knaKP5BXKG46BsqeKMrpFrN2HUpYakoCsyyua5n9kQnTtyuYPgM2RpdKt5fju",
  "key34": "5QMN4MyjJoZyiqSPszyWw3CNhtXeQWrnpqDfkihYFKNt61JivDRriGS8nto1G9piAszVioMMcyp3S8dNrqqyheD",
  "key35": "3iFPzFeDq9dWR9RsKvcu9prEtBdZi4ioNPwfHF6uspfTaWUn4MLwUdEF5ruDwiCQfTqqKz2hNzXsB8g5Z8C4KpRA",
  "key36": "4ZcwBu521vzt2BUfBYikfQFmSh6Vcj4UhJ4osVpj5QU5mAVg5wMfZa2PMEuc8Nrpkkh6Xh5TmRQ6VvLbqFwGXMHL",
  "key37": "419z3W61mzdyufMvYRyphjLrA8TNqSfcyGD1d6HbCXvaAcXCqmyH47Q8hds6dwjZ6woqtv8nfiUdtA6KbMQDL8cf"
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
