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
    "27HEJZaycKhmNcc1BWoe5g5ziLbEqV1xJBG3zo7QPoEehVcfEgNUnoTPFN2ELGfmM5L3NWGb18BVinTDYRdkvhjS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36mV7hsKcWEfoKs3gXWGq9dSHxFXgmxVgVbRwci6UzWtKa6kgiWAHHhDfTbTBny8xdrqA17Y8vx7THbHPLySWbj4",
  "key1": "2BJS1aLJyKsgKsgfChKNzrH3eTT8ZAnPoPLSLdkEngcH2DWtp9gJ9bBvy7P81tpcAvTUaZm15eeBT2XGj6tX4h5u",
  "key2": "42fMPyP7FkCAiU4Yh6uRdd3BWaSdBFy183GRT7TvFvQwk8ZYzxN6V2RmAYnZujpc4hG8o5LHFYF3qRFBrtgiqQK8",
  "key3": "2zdBVi1JuLq4AzbVsmKrQiB7J1UhfYa1C852JBaLCbzn6J52QTh9EzLMcny3xmtrGwDCUe2pwt4K9D5z5WG46Uqc",
  "key4": "5L6Dzv69QEEEn7HH2k78nsjDZGG3wnhFeUCUJcun5afsAntJujqU22zD8ZcmWkayYtvphCn9XbH8ifqMvwSQdFVh",
  "key5": "3zUcKtvV9R2xewcqL5RZ9JUAR7nNwEZYmiiXh6LWY9DXEbJn8PcivqA8p2zik5vmKsFv6SjQVMxAdxAWp8DAtvQ9",
  "key6": "2oNwBDT6CjeikmyEFijEuQdmvFzaxVpLpaeNcPSVLDwGsXAQkrVzYBWdHnzWtMUzxWN18pTQGncBWdpwknewFQTa",
  "key7": "46DMewhyeTseUetD7rBgEvCwLN7nx69MgSpq2YL2kzeJmB4s6smY36xvwufhBXLntXCa8SigeQmqZWBfhaRr1kDp",
  "key8": "wAGV8wSgEn5HVyg9DgBehs97AopHneSdzB92wmUSQjFMVLj7qLUfDAZZwHx2ENKyLdLver5qotjUoKSu596Znka",
  "key9": "5GRiE7C6cKUKN4YAzKwLnd1sjoK3oVSU8uDxWKmHESWLAQphrRf6XACQwCyedct5UcCmvA5sRShCzgnTJnDU5naX",
  "key10": "9kq4YszwQK84QeYj3X3VJ9PZJK8xFsaH8xBFHoyLffwkLLLfdiT6kPSBTjukBiF2YoY7nWPZQeFEPmsBpgoT1FF",
  "key11": "2ob9iJkBK7KLQKD2zJYhAJ2MsMnD2W5SHU3yhAzucJ5nkEt4sUJf34xY72vbtHuT6QqvLQJXnCTbncLFWW3XjHDr",
  "key12": "52zRARHp9MbeNb1qGUSHCtcvRYifxxxnREEvmmHwaJWQWYTJneR3LkUo82cuafsinz97qtXCoaHTZFfdswpAt2Yp",
  "key13": "3aaoJGcWafjk5CHmzVKFBXJLcNSPbygSZfsDeEQShKZp6zX2DSnW15ZojY2attUzFFFW2GtmEi4vvBze5v1yWYyh",
  "key14": "LuBd1EW9DKBP3mNb9FnjzhHye3sHhLiPBkJMALbNvbbbv1bf4LkMoPFPG8MBNMg9iUu6boa2BWy3D2zduA8NRDN",
  "key15": "fLJCg2BkP4ho9V7Jqjt3DUJfD4KecUdDgfo5RGmLJ5dw3M4PiCgMoSfP7afQBsePmDSGMYoG6zwjQ5w4GDGGaDr",
  "key16": "5LjSRLMsj6N1uTRNxo3V6ymwhtf5hPEFJa8UBynk4TJ76a6waYqBjSD7vxfz2yPC4Zi1mnmKW1znh7Wg439ud9PF",
  "key17": "2KgYRtj1TfU6AjCqAtNot2MVGAGT3MNC8WfbEywtzh839uP5RKCkwwrrDXZDgTT91f1h9c7TjhUpeC2sBnotf37k",
  "key18": "59GBaxhh3dVyiBVcsPXV8DkdpFxV2RgrioP4S4bcsGfqZPuoV5DRdJzg5eF7ATbPeqy7wSyjMZuBuHS5TVAZDbjW",
  "key19": "65sR9MCH4DX1TyGDXe37RvgjYFzuYQsSbdkH7jRmQV7jniNPprWPJe8vNkCZaFaS3rfUqEhDwAt82BdpT1g4mgH1",
  "key20": "4bA9Kkxjoa5QZc7MuagLjxJ8ZbfjQppvAcgAkfHPA54UFMAuNLaFbhtdnTcAGg9E5MDCzCGqPg4qxpfGyWYsoix3",
  "key21": "PAcj3aUHiZTLY43ktmxvCe4k2EcNuzbTQpVta2Dssn2u2ucjf7eeVBLU4DEHr8ab522mHCkQ7PzZXQfy7jqQrGF",
  "key22": "NTEqN2bALBCT4dhHxsJagdgduSzCEanwV57dFxxZ3x6Gi2XSwBc9po6q9oPLKb2dxz8zP5ATx668amAGYPpQHg3",
  "key23": "5PizovHefZ1yVyYdkR4SebxzBU6cqsLnyeHGDwgTdYSPEps2QhnKtc5k7FrTCx2N6FY6ABeLaVVxN3pAXYjz43JY",
  "key24": "5dZj9qrwAzVyhQqzEhmVHdL3cjfQmvvmfhULVtVCRrJaojPbJ7DmzVaFsS1EFsdczwfqUMTibgdR9R6St2j6vQ3A",
  "key25": "3cQCRvt2i4PzshQjRQnGRE4Hs99Ho1yk3s78Yv8cBrpRGRpsvx9FpLiRrYs9SgAAjSPMez1k8TYMGbAiFbWdGNXw",
  "key26": "4uHPVWGPLxtGZnq91ph6wje4dHgwLgXDN3Vdhu4eKRncXx9BFFhUwiNrBWW8Pn12NiSUGQqmwtqaFBFEC17JAJVQ",
  "key27": "3nBrg4oJjYsWUzkYGMaa41GdE9uB8FmvgWui8pHcJ5JVWJt7NdTVVGfLKWCDAen32Kupd9eKV3DkcgQpivY2mPw3",
  "key28": "42Bn9ii98b8Ap4CnW3F84yQ4Yjhq13tFjritJpAUZ8hF2gtmxx8UyamvsNBtjEgsd7YGwM61nWGJ2AmCPTm93Pnn",
  "key29": "5dPd6ed6JWCeUu394SJkeDroXuzdvsR6YydapT6wLkCYLcanKPgwe4AVUZuRPr251BDvfHsa3TH4c6bfs3cPNmgZ"
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
