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
    "371UtTj3Cz3JR9qFJiPaoMGuvNmt9zvH4C7GYQYkD21qhY5V5Eyzwp2L8ZPHFBUSMYrfzccDCSTWcM7uy5BY11HV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WgieLiaGMqu42PSRcGj2qFKyDoG3186husX3RPY9xMTbhYdYpkgQLGds2kxMHmiZrR2qm35xMovHwgnYTJrRWkY",
  "key1": "42hh7KtkX4cUZtzMbxcKi62H7QtrsbuxaoBThcDyZhChw3SoL8xomCMm8JsfE8iGmnXs7U6JcBvGek7uaAYiWb3j",
  "key2": "3qxzbRdHSzFFr9nb4k3Z12gwQFkErnhtvuDHNQdYqkm9irhHVF2QhG8xxpmXRJprR6XVctGjszU7j4yNmbfGyxzP",
  "key3": "3GPM2eBbMkrBLdk7Bj3cnPbUkaD9FLiabKdjRXkYSecU5VKFsup4iY9Apya3kE9XtJsbskHhydQDQScBf7zmtG3N",
  "key4": "3dZ3pRVfEE3X2732iYBrQpzVKQuVVonebcray3S2x3k9tV38XfXeVrtAVu9PhWpUUdkqGvtmxXxZNkSx7WZck4AJ",
  "key5": "4UGfVvwEw7o795UkWKpGBX5d4o67e1URjfmhvWsiLemG2PzES3YBNmrr6F4BzitCMngyxEDLxDv7To5RVvmbxLot",
  "key6": "2J1sdLD5AJgcyHDZmCatiL7G1AeiRASkwUW5VBaLKKBRpm9itgp7xaa5c9XgeLCVQGSrKDtPiq9UhYHgcKmL6Pey",
  "key7": "5woAmyWiwsPpABjFZTgnVtb1bPjQhXHEQdEzrbo17fuxLBs8Gfjg4a3GoGH37kYhaoh1Ju9Jmt1UMVySyxVYBeR9",
  "key8": "2dzxBRNNWQAKEEtxY6dF4pdrDmb3vcanjyBsPm3K8aeoCGSfJQKGM53KrVf2MBGkw61DiPaEccqNcbFrNA7rUDgf",
  "key9": "sZ2RgCCh24rSP857Hr5BQ92cJJGgvh8gLz5DfXdn3QZP4zEeR3aetSkLwYwtLAGGEnZS8hXk9ccudLFSaBYyunj",
  "key10": "KcmoQdqJN7C82iF1XND9gpcXTWvDrrwZzwHZY3pbhFKKXLE45jkFEYxkL3hep5i9tVKpDQUSwC8z3Rs1NYZLEba",
  "key11": "3FNog7EvkN1xXzaXLQ4LeVBBAjsLtEcvqMFoD2qgo8VndSdh5L3jCsJD2UvMyhmKUDooaPu4AfYH49hhGjuNwUxX",
  "key12": "5fUZrvP8uh3rLPsbPTEDCWKeAaFLcJh2YCkHFj7XRdex1gPp5vvZyNgXAwzsos6Wsz4ukjbCCGh3jsN7SrgAJek",
  "key13": "5hkGFMDt8n1zxqRtoxSbxqW711DmPrMsFxfL6AvT2jQN2Cj5FowErVv6xfQFk92vhjTzyw8Q7guiiEmgyQ5DuHTy",
  "key14": "2oWGuxyyBnRs5kmpHPk1xU7HCgD7kic6Vdd31hv3Ht1keDSFjaQzhsvmzv6qYX2q7n2hM5qiLgPBmNv96o34iAc",
  "key15": "3bHBYiVeR8UQenSaERSaAL7vuf3EL7jHnGjWU3DU3YgLY1McZWvzU8camd2JrCkuhfGCdxgbyfWvgGrD2BXUmVRu",
  "key16": "2zhLccrqH2DoLoRUQAtDpfspGXh3LoqbYogmtZnrTMua73dtCPCh8bWfAiexWUQMhHh3T7EoXPKe7Bb1seJEdaYx",
  "key17": "iPgqkWiHFT6fkXiLEQAp5EJ2A3ZtSCyMuXT7w68pEAHR8F4fsmx77cC7ULDNc4HArzg4xKGN4AE8tBgLKn2GPct",
  "key18": "59A1PieMggevmrA73ZLmgMzK5CiXCUHN9UZsChqsvKuA21FR9Rc9Dd9HHZBZv8DBQAGfZWQxjTSVLkYw13xoM2E1",
  "key19": "5mn5spVRNBAHMMdPZhSPavQVPDAxUErZfxTTRBV7vRS8rBGdyYv3KHeXNAuHUcFwU5ME1pdB5LKPUsewb197dKGF",
  "key20": "5DbcoV8YsB1zrRgEY3ggtH44Q3QPtAjdUL2P4aYZxBow7KyCCq188JuCLKJQBtHHiLeqzmzsQCssqQfnkBgNXkVH",
  "key21": "4EKp5Qt5brjgeyYvXCdX5BkAuotfhg7EcJgTNBoWcH3vTozrPkbZhYg6eZc7RMJ43WXb5iszN4aRMuGTPNyPbdof",
  "key22": "5jc64pLRzpaJPfhD78HycNq7wSGGkPHejs1Y3dgCGmXwgAXEHq6yqBCDfmXWiWwMqpegronQZMQbtqDRVkG2Rf1Z",
  "key23": "4ndg4siM3Unn4i6YvrTrBu8wW9GbBNHEoH8U3dFEF8FEr8F5WdmNoQP2nnY3K8WHksRMq85dUX4kYYKHNBwZmeSE",
  "key24": "2pnVDygTdHeytsHCMLXXwVV2Wm18NsU3AtRSb7bcf8n6g37JppG4GwPxV1UXocyq2otLGVFpSgJcnY2JwgHXKq9q",
  "key25": "3DkUTz678xWosXfXJ9ssdCJcH5sRugNXgSf4m1Jp63u8LePYtKkHFKfJ7EjC5DUfpK4ZSMPkSKtKbwpzZVmC7ZBj",
  "key26": "GbcZ3q9VYFthTsqC3jAsJuoGxqazqyM3e7MycqS4MdoaYxthJnBx8vNVENpVCCbUqqYXutLM7BcaG5LoJR91Zro"
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
