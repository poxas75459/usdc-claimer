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
    "2u3VBZgTnRkjuHD5y9Vw5x5LAGQE36Q8aWTYf5amAwk3YoLVY5AcLDQNZLzvhMPBp2zkyVGPr7NVqojoxpCq4mmx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MqazxtAbHZRW6ecA6cyg7RDxFKbtXZTgu36pWrt4qtbhsiRUAHPuYL55nDXkWcBBhmzMFmvYjpdNjU6GEdyKoBc",
  "key1": "2ocNpaWTDxzD879MeK6Qt6YkQnTBhuMs8dBzV969a6SMRpsYh3sJoGDqZakayDTu3FfaNb93NZiFRkYJLcrNKiXD",
  "key2": "544pgvbbN5VW8VA6s12uv8kdPQ6nnjtk4xikGaVsW61RKivyLChjwZyjxYZS1m6L5XbNFCAA1n6Fyk3d6DjFEM2N",
  "key3": "2Ae69CAoJTLuK3iC6oREbNtjFhD6w9ic1cma7CAoFNeAy2vuF31CmG2jsEMJ2qB3syFbFzdKwrJGXA2wTCCGgQTP",
  "key4": "21jY92xhxSEyx5kfKWC3JhKuQLYkTKzzfzrFjZPET8k3KRLSsCrmTeVBsL7rQ8eJ3hg4ZudtrfqYnUHY5ZjbmtdE",
  "key5": "5SJREr2yq8MiYdDjbYMi4APkdxMxDBKopM2EitQ6kEKEVjE1YgYNUEsfqXZ9DKzSgDWut9LrphozqtqRuhm1YYre",
  "key6": "3iRBAGMiw7SfNJnNDsuhgsP7SM2ym1QMnMKVfWUJNtsiam3uUsoa3X2DoXzksUyFbFFCx4n6xQwMnnG3G9Kgr8Hc",
  "key7": "3tSPFRoLCac97KKyvNGHbAVE5aGAh8Unc3Mm22VNHvmdByjFffLtLr2BWQiLd1enWQS56XA8wfdTaL7sZbFgG3e2",
  "key8": "atfRMwvY6J2SBNefTarLyvH8Wdx8uLgTx7ERrNJtFCDE8Qz3mCALRv6xXhBJJndswyHMHxQ4LZaGPsEdpNyWejy",
  "key9": "4T1hhJpv4vv4kiNjGnuopcC6Jb6gma71P65W1jzD6ZucDX8PTu9nAycNTmjbZv76WjxEfxy3yNZoKzMVNh3bEbgV",
  "key10": "5mGnXB8fSz2eD1GXyZgKtV2QjjHvqfNEenpzz46uShfkHG94e5mBcrjgA18EH2wr7QE12Bp4JjY7hLfVdhAAtj31",
  "key11": "5pCgCcbcmAEkEEoTPsgzXjtGvkrZ2FmZGqj48hczwWTN9cMcDrj9x3taQPD9obt3XNYRk1S286WXni73JkKzPLgC",
  "key12": "5oEvXK81EVnxzazCCsRmwWd9rJRRRXDYrAhoAwBBtuMhPjDv94R2MeDGLQPMggFZVqxrNeudPyopYggXMPL3kW6z",
  "key13": "4P9QAPxiN6gTxnrVPCMBLYvBCoxya6hyrNFGUEvmM7hnX3duPsygzbyQvRF9Z5VkpMMP5fjxgDbFUsUjyoFShE43",
  "key14": "jBXtaAh8PjiBpzF7ZnjsTukvx1WLd1ntpyewsq3xcTNXSupNaeXcQToXFqzYDkcUMJ6fw57mJf3NvfgR7DGjSQX",
  "key15": "5ihgtp5AjASyq3uyfqGSnL3G7wegKAYp3GnQbow1evsNaT1FiqQg3dFR5hkLhXsRaKMv8dR9KeE5gREAyNmA6KdY",
  "key16": "3wxPtELVJDbJasnSNgkh1VkVixzsTo3uALpHvnDio3QVjgwqX6oapK6BDvfxQFMk2qyG1zZBXSntjT1cJzn1ADgs",
  "key17": "2ZiiJ61RFMVfG31E91zn3vXuDa37mSpRnY2aJaM6qwPsb5mrfyknq4u5PQ3x88SdLQevDZhyHUjRrHTCrHYoWFMU",
  "key18": "kt2pK9G8xJx5joKfKGKdY5fWWWaSkussDLhVpTA7BToBKTq4aBpbGvHnzpyAhWEJf9yoRL9hxMN1gpZA9huQ3Hz",
  "key19": "53XBoK4bUutcAf4VSU7FrENwjqQDqe8MfXvWBYTGpy2wX2fPdDioxHKxp6MhdHMyjVC5cKVyQ7RPJGunmUZEGSX",
  "key20": "MNdx9B2DUPD9RrtjpYhdfZnWN37egAm15uRpPvzyYtWLAbHBYHq2mgbJmpsbR8dNjk1sErzmLWjoBqR7VWNuKZ1",
  "key21": "3uggy27xTez38froWdd8TfLzuoPrqFr9tXiXap8HbjsHpg1PGqWC63SN9J4Rd4uQb1nakZG8RDHqiQx9BV5qBdHp",
  "key22": "5RbBLxem9hALsJoeGB6DCbKQs1YJiFcET6T3D3jtPP1by91T6DQxDddHMswEY4HVixxBsXxbDUUyP4FFAn4Jad3c",
  "key23": "42BdKKbHAFekzLBbFpuUXd913aLA7FBuk9QUFwDaAJqGQWJZmtLpxmukU1wEttugoNmFVzbCbVu4nG3ud7iokeay",
  "key24": "T223jeAuQPqXugiaZ6M1GP9AsCMCCRCDFhMuWviAethWdGM1Fg6gPjEvZK6hhWYDkuQpoRnsPZvSNRRnZMf7AZN",
  "key25": "3NtCKFudDHLHK1FgtQCn9YgpiqJwmPTmq9cRguJ25A4d3jCCnzUHTPUCq9RwLAZDpoXC235KVXqs8GKwH9FccpAP"
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
