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
    "22xnS85CE1h2VwFZqSdbubgMwK1xazZUq7nAc87tFMrnsb1ZMHySwJVdQgPmSArRnZSt69m9R3EuEZDojyQn7K7a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vQBqhNcWZAa3q9w37fuomcPitxxjFdikSirtd3XGuSpBzdpwDBHvk7SdBhEQhgv5jDGHXAVPeqcT3Hxaira75Yz",
  "key1": "5cEGuWyYgeC6sEp5qZX29Tufb2LXDK3TzQQACjqtoG467cnTzRhrpoHwkVkRqrGvyZVkTbGc5VYZEC3CsXTANKu1",
  "key2": "3s6gwe87L6yxEm7NdWzfVfGvh47RLw5L4xUxKAva4KAZ9VyfN4KagpucEtU4guktKU3MMap5YgNvjBG3TjVNbLzb",
  "key3": "4eC2vUK8GR3piNfN26APouVGh7MVf8aMpnmX2DaQ7CJmEXMH8fLwdKFP5YBdgvV38sxb3W8CNbUoyRwmt8q4Ce6C",
  "key4": "FondMJfP8jsLPESfbVu9fyXuQC9NfefNghB3xXYKcNrDAaPkkffsAy19kinvDByimdXMqxgYSkAj5Y2bg5tZy8q",
  "key5": "38j9X4TuhaVgxTBA8E68Up4EcMW5v5Xyf5L3ZYW1aX8WhyoRYQCRb7egf5AE8Ho1Pavm3kGt8sKDUtxPxF3immaA",
  "key6": "4uGv5yBWADbowYWrTq61LMsQWd5wA5eTbvodzGDgQQeMYwSzRkEKNxRjWFyav2usizQ4Uf7jMC1hrYeEBs7t6DY1",
  "key7": "yqK8knQbF69RyMtwqQZWLH7ECjzrkbWW3HBLVeNv87bdD1RKmDCya75m2tK3eerC7tfwfjaLTV4uz3MziNNpzbp",
  "key8": "4G52e3MndE4FJzjbgQpPgmt7GadaCwJWUjHutsyoGjVWptq5X2BrTTVsf7SXQ1Wne6qp9dfnR8Z1M9DfH9BUgWsH",
  "key9": "3ThwWjHiFomcpMbUvYVF9v3cRioz6HhXwxCAQs6hMMUgyf17NzqufiXdzTuSNY1GSw1ht4m11kNGHpwKTWCZXxEg",
  "key10": "375ndTV8SrMdpY5XkfABV3Fp9V3MNhfziASjXkyTiSTzxEXzGQLzBSvqwUqF96r7rYvPdiDyino1F95Ar6PXo1Vy",
  "key11": "3HhDmgXcWGft1Qctrp7bSCgE2aAsrd4MAVmB4Sq38Uws1UHRYppZaTMAFE3TkV8Bj2CAiTGeUNq9TrZRPk8hAyMf",
  "key12": "HqkWaA5L9TLAh7tmQ6bdHVgnsAhu6toim6LQadrfVUoz2BzH9f9vWaDtEagm5wdXgedRXWVoADpiNQrLSe7SkeU",
  "key13": "3Zi3jSKBa7gtMZVFmV9ePNo5SuNpobn9LK2AykDVgvPWfeCTDiBCksUqm6ScuZ9SriXr8a87SuvZKnq5wWT6Lf4z",
  "key14": "3zFNfB43CPQJvTkb2dtJW8gbyei2juLeiHdCGziQdNAyQeVtqxv4Mfbes1EStq3UKN4DkcxrCAfBTCWYuWNiACkU",
  "key15": "5SdHwEhGeETEFTszUz5VzvRKuWG28GrWrSfMioiWaTvEuebeQU6xcfXC9Gd4Au67ei44skTXQKChX9mmsuVCCkuh",
  "key16": "5ecZ8csJXFs555jwVuEQtRNcarpY83duYroGzxSVxxeur1rJLvqrNvuFXSA1h42177V1LQXre9Hr4XoLF8nvRqAN",
  "key17": "5AyfSW43UZfctjzxFjeJk5hGXMVY9HWbr2PFft3ovxX7Fz37aM51GWWmH2dQ2h4aucp7TxobQcZPVEXT61yTaQfy",
  "key18": "3seFYBwZmHiw2ZeWDsrxHZcuUHqX16gRCxVXLfEp58LLXY9BphitvEXYh6v1SwEGYWGNbedeJhV4esbsddULLPGj",
  "key19": "2gGRibEzfuTRmPiHkRNgziVMe59U4sexeKQS1CJHUofibM2D5Y9ro87WvVDwMv2jM8ZeCkbGqgstzUxsmcuFMfRY",
  "key20": "27zCsk4MJmR4dSEa8uU5sFejaGnY4xotFRCAvNmu8uwykMmBpGwutyiRrR4ER9aswYsohSUff3eVQXuMEq3WFQXE",
  "key21": "ECynYAWmA8GWESTJF72bXmqDWoYJ4EUSQFJYF9SrAoUwcWLRaoY8w5c7oL9ijgxqGoDay5pSUNwsWUJzWHgs1aB",
  "key22": "31CfmQSW6zEff28UjMVzFUHzYvPWX9TYqACLqg1bdLhWx6b8FySZetZLQZfw2qEUFhgZpoWjTiEp3K5qoXCyisXB",
  "key23": "5SuERQCuiyhT8k7Shf23drAncUMSyLB1hmw85W1nuForLtmiSKoTcY1RCa5w53mpMvUPa4We7HyMHD2B4YEsZbE3",
  "key24": "3GemN42knMQkYAnCcrSfyAR5hZwDKGdzrUhopiPuW14YAva9U3LrU9GSp77wvVatjgjCt9R1EJBCvpmgtGYFb8Bn",
  "key25": "5frTixALDyKjnfuAXTujKqbE7KF5tB3ua1zFxr7gY5iQFQ85mTbbEWi7zqiJTNt2jjvEUNuzNTDR5UPnzKwbMEWb",
  "key26": "2FMgPkvU6xtYutGaVDmjxq13XAyW9Mj1DP2y7diSB7oW2q2drMFYsjq8THbH421RnL3AFoeWTEsY2bJ2ASp6Xvce",
  "key27": "5HiN1eLQAap3V31SHwdMGSwe1ZzjsiY5EfW2VSEwm3THaiMiYo7RVXnFwKaB7VC2RpBycJj4snZEJN1sxwQbjwB6",
  "key28": "5Vc1g38EmvFwTrZcVVLDCsCeV8uE1i1d4hBtTgeyoBjoi9obKZ8cgckMYqJi4USEaCTCfSns54mRKskPGa3Z941Q",
  "key29": "5qLrT9AgzQUA3N2wePiAf6ixzrtT2fSA367ukqSBPhX5N5uNETyHmCgLdREur8xcTApGc3WzZfmgThMVhoVCbZmM"
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
