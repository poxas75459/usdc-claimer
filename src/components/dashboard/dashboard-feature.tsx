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
    "51XKSrb6ydiXqBwggDikjX3M1eLMYgLPccL99RquW9hLtr1h9gFSDjaqLogswUaMdXqbh9CoMGFcL6WwFcgtSTVc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EYqgeLmXhopV1rdBM3ARMpvgnvTMXnFZurm4o2AacyWNjkgh3yc7WSyKmqSuS6kbjMohKHxyqwAXzEa8sJQMNdv",
  "key1": "5a2AYY2ji1dyY9FreAgWawfZKHEw6ESR4UrEc4fYBzKwiu1QWnisj2ufUtLUj1eMmFE6X35yW4Htt7RzfZDLnE6k",
  "key2": "2MCL9EMUtPmzUiN8vxxF4BK8H6mPZduv92n1pCtpYJHJgwYQnxyY553RsLVQ1N45Z1TPJZRvQeRYginZjDA8HZcn",
  "key3": "MMfJaLK7FhWkb64huJdGFPtFkJ5fyA3medhXbSaUr5su7oXzVizXPAnZFYiwiYXrSHMEai15ZYd3taLbmVaxQGm",
  "key4": "5cP1XUkdM6uHRijN7XSTjLQVLuPCTQQyqPsW7a9G6EQgNvJ3QqprrYyunrPe67zUPS1RkVu7YqMmK8XnjTyRu494",
  "key5": "4f92Yh1VNJEFy7FaB4ojCaoa4rXLs5Gq7ZjNwsxzL3WUky8NuLrxnVcFm5tWBAWVdXSf3rcRVsfsHccdkiQMuWQG",
  "key6": "4vhBe8AG7ZWc3JFgkAuN6fFCrS2PPPiE4YbxcVNg9Ft6G6ar8ADpQKooSaAZy7FEZxG5LFSDoSexXxJEaoUeMr1U",
  "key7": "4WeYrrAA8viZRQs25rHxVohtTWPVojUPgKaVxwCS2znggmzuq4ZV4jFaV8Fq141Qh8wzjRX3fWHLRXpa6J2c1Ri5",
  "key8": "5BvwQydWDbcPAxrAcZa6QK83DhWxzTFCQit2y6CQ6Ae46RNWoa5XTeshPU47rkpY9S2bS7sgEuUCkNedy4Q16K8x",
  "key9": "3UgzKPEerYbaFCJvGVav3uWRw3HDmL5b5KiyzJDFqBT1giq8PUr87dJqdBzbBWDeJZdZLHJAFCH8sBDXi2DoSoQ7",
  "key10": "3hBDN66YGrP8YT53DEeSfg6iMRqbqesVkwm94FakkC7XqFj9RHMaqCSkuvxsDVp7EjbrTP8TiYqKB9bK994b5f9r",
  "key11": "58fzgeJfRiovAj2gGj2BwpYDKhq8vFHcs6qVKYDtwRo6uE7UpaAvgyuVxkn1dpBXMSTP3HrbeyEAtjT5FtzpJuau",
  "key12": "5fUtfmuGvP6pVznP2W6sT9FBWrvSeqEFdoLSu5wJhfXk5bBwF1tPxaSSSL8oQrSedmvyuTF6CvpX5qAbRdePaRrs",
  "key13": "45huXB9hD7UDxuH7K4ZxQr29EtTokwjERjUQbefY6eZ7Zai2w1cSLpGANR5KXttez9tXUxiwUM2DExUvks8T63oR",
  "key14": "3RQRRJdWdQzZ3w6XPquefxTWr6Tcw74z3SuLmQZEr7GjY5y5san8r1QUn4i3p1zkCesvxc9G4PiAYJBotKkRfVns",
  "key15": "pYNskCVkSXAN1vRJqFW8QJ3YjczGZmggdbwCPDdRo5gP4TxnkoFqN5qmQh5QreZ5h7Ep9T434dvcWRxwqmVKX55",
  "key16": "ZV2U1K2Nrj96j1SMBHNc6xXuQNz3xfQhCc8AxnEVGK8zfQWr5vqFACiG1nzTfKrE7gjLL6AwL5RekjHTzFPAE4t",
  "key17": "43C75r2VdJV96wT3jcCrJRXC8pcYH2N4LhNCHu5UR8nvqQyp6rPsS6jRdf8w9qi4RuSAH1CbHcJkwxATqjEy774g",
  "key18": "5LN9ZrNo6jGs13r1Kf1RqqdCsbcQX3XYeup6mP9fjTimghNjJfHJyuyRfpEA2dhz6XfsiC5GA4bvPPAEufjJCB94",
  "key19": "3dsN9EFezNNhaPt9w8n7HLiVbWnFkfhhCwhPVmJUaJirsutxsCKoS2JR5ii7fY7mSb9xKaiBPEPKPdBS57mSxpna",
  "key20": "CvfGs4PJ5zegxURirZKsD1sQoq2DtMwYUdY2k2Bi8aVfbXYkTD8PoAQjxffHpCU5xKsnJDQDJ183BJHsN5u9a7S",
  "key21": "KiX7ETS2vHx3RtCy2xTFvPKD8XUsbj2YHq28wH97rhR6AUT9PvLWAHxRBagLj6awLP8tW2zswNHE4DRPysME7XP",
  "key22": "4aLEkaK18UVEsy1afh6tZnLgq2HxfqnySmUNCBtuqeToHAMcRPy2cECbX9GYCs3H2czpxUy3V8VXkPsQtcfNAUgH",
  "key23": "3WYLqRBAjBARjpotYyHksiWpfucb1MvPDvvpexohJmhHzAz1kdoHYpbCfKuwFyxs6Tg8DyFjGoBNDA9B7FCL7Y9E",
  "key24": "3Xd8KHXZRthXDUbKGPAkxuqASXL2LjyyipeNbCYHSbPECaFiP5yCAmTRApqbTnySGedns8s9UzbCi4yFMj1akgyj",
  "key25": "3zkLyq7Bu7PSeWNsJeP7ZBsSKgnhSoDMe9k3NaDMfrmAYdBJHagDvWxgHiK1b6xWkXzZQAgSuHM31skhbTB1Fd88",
  "key26": "ZwiehXWDBrUGMo2Z4di1FkNNQPAYhV4oDWFcTuG2LtSRtjAd1r3TyVz7JWWrDNcXTDYGhDvqN5KphvaeS7hNjfx",
  "key27": "5rVuqnvhx5hNj1NKJzP7RhRtjfVRsoyxdZPcJoB1t5ciVtNP5MqBydy3ScTDoUFZqGdqXoFqpx9TCs7jYGbrvSfX",
  "key28": "4uoE5jfgbQwfy4pDbovs7hibZm5Z3PoZhRRMBvcXxABZiTSu6JrDZcgeVCzkHesrtSj7FMjJTRPWn2f4246Lb5uf",
  "key29": "5BWUrcYCTmhbrxAPAKzPMHPJxVnp3t8KAxTikPJ7pTTkxM3kJBBWoyGRiE3hw1q3udoCgEhsE3ph8koKwa8JoiZn",
  "key30": "37qVwajKCk2FmUmfkwHVjQaZWrvyAFRdnRf4UAvg6GWDSuTR8aBsyM7zBjxfEXBsMPfgVF5sPQF75CSTqHQ53fQv",
  "key31": "4B7wKvJJRQDqRjLLRzvwEQiVPNbf6ZFQstpZwyCJYqyQynGjUUsSWSbTM9ZWEkfviJDhQHq59NQ8RKSw1PdfCujz",
  "key32": "5anXcZ6V82Ph76cvSfdPpbqhD4xy4isvRNJQbDCMMDnYhjGPL1exbtLmUXrKwvL8gNdoa1uw7wFw1541NHgsaeAa"
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
