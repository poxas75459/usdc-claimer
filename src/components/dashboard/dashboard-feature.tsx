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
    "5RfQduEEuwhpDCYmAib1TDEgQSpwSr51TSPr2t3uuAeGCCX5EmAW3ULUZa7NLJfpCaFXLjVcTdSaGQK21PwCjyrS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4m6afhTvLkLdyLnrthwehxS8FxdPhvat118JFCBZYjJZM51eQCdiPKfi5FupfyT45uaZ8YsQ36Ge1J4AemURvS1W",
  "key1": "rQq9dW1MKwsh2sGuyhZoeB1pj1jCeodugP5dhsDyb2TARo6v5P8iPrJRDFd2P146cjBeLsmao6dophkJSxs5c8H",
  "key2": "28BWjGNSDDxMdceFe5C1vxcVViQ7w3wXncGUb1Nm7jHAxjBvUGiEERhVi3PdoCoyuUd6cTmZAmuYYsd2JubNSGh3",
  "key3": "2EUnkaKMnZR4UPRbgVAW5C3MzYfn4kfbNEdnZTMU6QdQauWkh5LF2AAMZoqx73usemkMbJepVyNcgz83qLDgqmsz",
  "key4": "3mTDJBZB1ghY2eoeeW3QBTH1WEMvj1x23BihJaKxM9pDEePTVe7T5VucftA21iuq6ueYKm41X6BYMEU5FdHhfckW",
  "key5": "3FaqmBtRfnBdTUYj27FzVW4YvxpFTojHu8KjLccZSBjC9dYqgkUqWtiReGvAWsFTgmtubKCG8E3dSv9KzL1ZgnEZ",
  "key6": "4JeBUweZpuaT2h6QU5YyT8Ea1k1ACBvagvVW7UsNpvfPjEeQEnsAht7iVAkf5xfsm9o7cXUHJgz5PhfPUFjc5cCg",
  "key7": "m9vngiURJ1cuWoPEB3pipi1MSrrWG7gxAryawaET72Ji82BTWE3zQhBLefN7NhChPpniw23Yieh31CpNhStmBMG",
  "key8": "D4Kmm99CAawbS5Cmm3feFE2Dv415BCkNwm3xDiMrrPSEeHfUJK8VzcpEy1zzVVynSvH2gBaqbCexNDEKUN67iDM",
  "key9": "5GoDmXaH1uzAwTwL9mM6sumyQD5Gyt5ZKfcW5Eszmht45eTzATRyErCzUcAsQAVLJmLSAVWktk9k7Mrncf6ZaLAQ",
  "key10": "2AVsTFN8UsJcEMgwNV956CQPguaDdYQhqhz1vqugYku3swju2xd3gDFwe63RbBJX2xxqJc7xjKBVH8BKA7Vem3Mm",
  "key11": "YYwwhZSPuAPDhmSDnbygXSAHgKG1QpmBsfZS3aZfaDB2JFYZGz4NsVKutkXwovM6iP4Dfoafs3widGb94sDqXxT",
  "key12": "4mRa5cZyHxVqmEHd98b8mvbxMwTXpBnTf6MZwtnraZJSrHhA6ow364hagxRmk3asRH1421hxpXLWZEQLwdK7Jc5p",
  "key13": "29rvuHkmdfAzyAjG1NqejykQ1MxNJKk1yKMEg9U8CHAqQsHyLMZNghJGuT66SksoRXyxgL3mYKp7ys2j7RTC6MPz",
  "key14": "Q61iZbdNeGsLC1gauFVATdPGpgNsdh6qJ4sqMqdmk6AynsyxK2SYYRazjiKdsrUDSFouQdzefYaxEZrBn79s5Qd",
  "key15": "3ucqry54LdeCJsCd5BCka4Sz9V724hjf38oaid8rp9h49eWbGnmAtDDg3zNb9H2ehP6GmxwayrJTPch2MXHKxfrh",
  "key16": "4h6KjL7Ek8JvDkrVNXHJtQEG5gby4t9Hv1XT9AXGEqcNK2beimvGn7yueSzLSU9X6C4maMrzAeDH5gUy6CGDtSNQ",
  "key17": "334WVZn7YRsu2wX2A4NxjBqMyzZXHfQqhwkVsFJcmHTr3pWKDRqSaKoP1FYEJeoQwLkpmMu8kr26BLFCWXwtz1D",
  "key18": "5tCzqLeHuNmAP8mf6V5j8RHV5fr34GRcmpr5iffNQaikWCrbnAj7P444m44ewDM1VbadRLY5v6Y2DffN3MkJew4v",
  "key19": "4h48j5S8wPNax7FZ79c1naTzauWYRM3caSHgvCWAZZS3JU2NXKHjcHo9hMjGCh1ArNVBuH2KFbodnWYdUNgmeWnR",
  "key20": "Bze4xjjx3EDrXern6T3WaSDqt8UoRUHhaWviP7QyJruiLS3ex3atyhfuimxULtS2hQhggREMhH8V4po936ruXBz",
  "key21": "5dBNph8qr2v8wnG4eKaaDFyDkPgoRGLEA79MEqxY9rv8FbMeGGZECr5XE4bqc8aeufwkkADzEde8RjQYNk6PR7nC",
  "key22": "4VoP6NGSo3mwNFpDBbaRXKLe1Mg8TUhGygpS7kM4MKGJ4Rrdtnz8Bjc8132CJ4atdj1uRg6gBBnQ3CwiejeHrMQ",
  "key23": "2ca6tW85a4NFMxgfvSBnQhZsNdjNoUY6Mf2x5rJbv2KSHhRWENqXpk5DFVqTH8co8HDpdNyutSZEBbRadqVvWD85",
  "key24": "4tmpTRXWkHwpgmwvtfTvRLZChdhmtNAmxaDPvk5EKkCPWL7xpx8no25LQEFYv7zh1ojmc6Wyr6dZk1n1ZGiTbeKv",
  "key25": "5AKUkfxYGpVotiwDjd9gNLP4XGWnR8z5YQByvUQ443WgNcmMMZTsTqXQ16yTyKzayd75w5kndpAXp57GyR2YMn1a",
  "key26": "3ypXKoyBmPid7tidSMejCAVkZyXTwu2NBGPX1aWUsha9jVwtHifxQH2vp38AqvXnrrs2LLPFRSjubeCL9AKjqWxE"
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
