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
    "4Mof1bmAf1fdZs1zvnRaoGsT7bzYnQZmT3sXFTJxqbe2rhTG8msmotJ161LsZD2vsjRvnhHeK86UPpUiVdy1Zt62"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dpmeqRFdEww31LJjEN29S6SGgkifGDYPqFA9YN24N5FF6LFMTxbR9Wgtd2YmN1GyK9poviE4t7Y7GtxEu4Rq42s",
  "key1": "436Uex3A2quhQ3U47k9mogweDeDuJ6ng3vF9hX6SqeVS2bsLNKUcFr7f7dwF1BgiUZh9tZgRtxUo1dh9SeSGegq7",
  "key2": "3GFRHB5sMQgh7S2jGwaNJhdSQHpzkLucsHBgqzFuBiVZ7NwPD3DznJTapgpTwexXuB6TtasVHCeSGYFEwuxVp6xW",
  "key3": "5kFYfBKTb1cc9wsrXxLhoiGi7gDG5zY7bWnmvStqdjZw5yr7Ydbw5Vcjd6PmYQoZTNpbDaURdc1gtyUkVe4uCe2t",
  "key4": "6HTipYHWb49rsSQEajonsvWjMebiY6o8oo9htZdW6HMDZead6t59mV5KKXyX55HDXGFuwKhjNwJX7J4tUprtcPg",
  "key5": "2LC4x4bmWdRiyvMahJPqKa1LNKEhtTV24RGb6k34swta7U2LqNSbU66rTtERi1VDQp77v6dKGbDwksY6v2sLCbp8",
  "key6": "4hsPd1ApubavVf4XAYLZ7884dfosHgfszdmCczVGa1mFYnyraZT4fioDRDH6kr4SqWDqndjjytLNZqgjbCXayoEG",
  "key7": "sy5y4cREtL29ABnULt2D5TZWJMN1tKGrYMjq6RXU8CvNrc51eDisEQy9qiH9jBwfbiMJderWLLUqVwmfR7E15GQ",
  "key8": "4AqmHQ7YGK7aSVPxWMECQ67Y6EAzzqusqn18XfcF5upYxUSLeiYKa12dgsYS3qzbGdRZ2iVZoGTEKFvkZYLA71vu",
  "key9": "49ZVyYbxjUNovTaUdTK1cRq2KPTLAW5nCVf739GKoppTn539LrxMYaZtsk9CLGhkvu491vcdbV5mSaSwtfASK1C6",
  "key10": "4HmjncGtvBefASukPKCZYvREuSmBzYHFiism52idfztah4VCZd57EcU3s4dSsF5HpWb31wMp16D95xy2r9o7oCoS",
  "key11": "5HKM317hDAE3Vm1c6R1pP2VyPDGA4aR4P7w2LXo8QLLtUY2fZihyNqPXGwAkNKqr1pgusC5DMRroEEy1PuLf36pn",
  "key12": "eP9kv1KzmkG6kq1eAXgQPFpLkrWL8k8NifPNCZFXk3BQPNmPqb8Exu37T3TmK1ri9EyHpwfMNFnnPubGkFQEWex",
  "key13": "2pHY5RBUgdXzQYbaukuZaMkJQF7H3bpNwjTxeehRW3rgwxX5ShvM9x1oDmsagtxeCbAWAGLDDej8v3JZrsdScinq",
  "key14": "ULqveL6ecDnPhfSUKhCqHv8HXCFbV7Bk9PXYNNJA4TLcMLDGtZCWRQY9vT56YKEQ36nyCe3R613bmUVn2SsbAou",
  "key15": "wp9u4WTvu7ges3n2tawbX6fwBi5TfV1zTWKeZfMyyu8vN2ceDdtkyKv5rkeSNamMATRqN3wyPwsGnfeNGjMRUqK",
  "key16": "4KVqPi67Qmkpe4LNJRbefE8DxZtFe114XjdUJuyXyq7PYWcbyvCefbXynHa1wbRpCi8VhiJLT2hoahN4nQqcirxc",
  "key17": "5cSLJKfUSXtUKEPwYJJRi4RVNqPQVuYhtp217J24XRqPbeUK2ieera4symfeedJB3m3dcU1YBKxNTdBU1ishiEAh",
  "key18": "3pGb2Sw9aeFfnJxYVDvsQVgSdwu141Uoqfk5uSryqRXRzNPPKPPzdE5gVmKrQLyNwTJZxm1WC1KEg9mEetRCQJra",
  "key19": "2aDots2Kp14JzHUc6FcADqeoq7t8nf1b5dkuqQvxh1zPmBKMTpUd5ueymJJKA8Uz7Sa7J97DmCUDpwYy7oZ5EjKX",
  "key20": "5Pa21GHbRCppVnNu1kMCjCoJFf5LdhwDAphRsftMLFgZqUxDPaQXsBn5GZhFkE6JTY3hVNHSXmr8QvkZkxPGTYzw",
  "key21": "22VQ4L3Y4QGGjDhj9pqALEA9ER27U3si7QMcyfHQ4fKGzRAmoo9TzuhoxRhPPNcuhngEbbnBxAitQMZj29t6KysW",
  "key22": "4yYzEuNPauVfeZjwvLeVe6JpvPghmHcKcXdRtj4UhBDTjumyZP7besFFc6kgQ4ufSkedjJUfkAUFo3aGnPyx3HBa",
  "key23": "23m2v4FWuCBPFqBTZSNu3Zi7MgpUSVTmnWA32RfPkn8HR4KW1zo1QBnL3mkpancRD8zU9MKbibNba2mLseh4x2LA",
  "key24": "5JpnMzdjMHeD7etsu2f7jXhfZED59PS33cn7345boUmpiD5NwipBKvcTySV212p5SzMeFHsByY9Tq3MBVQVK7bwZ",
  "key25": "UQMMVx6w9AsX5umz88t6V3LowuMqnHR9EjUowiQmw1WY7oh3vgc97tr5ed3RscVcXpDUiMKdr7c7TLD44Pc5m5H"
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
