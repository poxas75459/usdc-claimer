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
    "4a2byDZavCyK1rYGBame7qDXcmnJe74UdjCBYVprGU876SRXUbrZGtZZySnySBjEAR5yDTuABoHzgB5Z9zX5cgRC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2x4DqsyGFTNSKHMPLqj4s8Z2qadhBWT5NwTftWcb1CBz14bTgEM65n3aBshqWLiwpZf3hFUWmjAXv2e3d7CpFQh8",
  "key1": "2YJfg3RoqLfYeub5kD8TxjPiAo12foMsxog6XniPm9F18dqJs9V2Vubb8gkMEJDnH79izTypojCtZtpWHsMKRJNv",
  "key2": "4zCy8MGv3vQF5aThZhUneBwU4BM65ioc2oTp19JWPjW2oho8L9L5SiK28AryF5okKds9UTcifdA7s6SPgjZG1seY",
  "key3": "3fZ2cLkH8LwzuBTKhHFoXdwU5MHDYhEQbaSwMhP19q9MwyN9LJPN7QHom3NLvHrtiNpd7ur6AXr5wZvn4Mvf8zxf",
  "key4": "2QT7GWTjiQdgAx3bAuSxjVgWGdAEw2usKgZhhfH4u98D2A3voDfWUeXgPNWX3N8oSESks5daBcHZ9WGfTcjFpj3u",
  "key5": "suHPGw6wMWhEQGYjJZ3CWqr55H7J5mo5LsLF6TSXeEdixFxzvUHmWfYfta56WZmxeeJcZjCi3fStziAhvgEX5sE",
  "key6": "3AZg7ECNi4xMEvRLSouf7mjtu9kANnD6kdr6YzruBvaPn5Rkr27ZVaxS4dmgjh5oPufrroMGNz1tquZS6utMfwLm",
  "key7": "2sYGZd4xgPReKJjTX5VZF8asctdCe7fnAfRyCQfdsdJpeK4AGaa12VJQ3YQ7HpmPD42Y9WwUWErR34RQWeTEZJLC",
  "key8": "2GNjuFisirUAnMjUo8rUCb4gRzMwsGJGqZhnCAHMTshZedUfRur5VyXsAVnrUPnW6eBthCP9uX5edycuB5kDUfrs",
  "key9": "Yd4GHMj3E2nMc7KbZXEBrSVEVHS92BirRGmicvSHHABqBf4k6ub34ywwj3wcARYHDuwFziHu7q2SZpnSzseUUwn",
  "key10": "2xsZuTQnXVv63rfrraELhLFjDmHxjcnZ663XDPri2z4hTy91AjTCyvSXqm2F2ennx1m24qZTJMBF7DMYKz44xtqm",
  "key11": "5qTUcXqCsHRaVFdNV37UoMbccineszHU4mxhhJ73kYJntVxmf4us4u454yJi3h6TmFwn9pNeqeBpFNHLYT2tUZEY",
  "key12": "xFcZ35e5X5rpNF2taEjweWGcH73x9KsxQqZWYfLj6MsHrBd9Vjrj6L8TX1GnxdxAAz5HUn2nHz4aNdhmtW7cEta",
  "key13": "N9iawAvX9WNmUBcgMxuWsKL9GGap1eqDXKV4Ec8BpeoriPcrZbzSoKvQLsuahWB73choLQssvpkU6EiWqa2UjjX",
  "key14": "7n8wu9SqbyGqTHHhEctimKwcLkqpKuhhu369VC8YV4wLCtbXch8zDe9PA8B1YvUCPHQFAPURGj6vjwNsMKHQ8gH",
  "key15": "Lnc4AwKD3N3Ynja72AdkN8XP6mZztsKkFm8CH9KUpLhPHYKKBvLnZonMCpvd6mtvKrLctV6Bv8AUo1vrHGeSzVs",
  "key16": "4MdWpsT3rhnHN3dWVcTYvfmaNtWYCtxvFjiPrBpadmvSDcHpSyfcjC7YAv4onf3Y9vijze5RcHTcxF5ZhipqNLx3",
  "key17": "BghkLA9B3JBBdAQ2DvWnxhr3YPzeA8VeYK1zcp8JhqjeU9PL3yQv6dksqp2QVJvtaPtd8wqkmtVe5WPVUsrdoxc",
  "key18": "2bfFkFJbTAj3uVrXRXN84rXfFpptgtKUh1FSvmV6vLfmbpyBttvY6Kr3VFfLs4jD14gFPMhcxau8eZDkXkkgrCV3",
  "key19": "2HETtC9NBRPDikdxNyWRqkyuZw8VpXPSysVTzohJzrLv5qsRBrpKPmS2kHbnwnCEioskHL8Q45XWrYf4VykgsVni",
  "key20": "BHp5VZumAwhZ5qvovtb1T8fFxPxmvLveSSpoETGb2TR2u2JvcyD7nzxHJ5ZJEut9dwJ7mojwx7tPiZJSYbpvFxA",
  "key21": "5qK3D67aUozFvMMWWpTAQpVNi75HftdtNWNJNF34vGSmnYnVvUB8wpSsF4TrMzrawNdr15s5zBMH1nTPT13Nk5Gq",
  "key22": "5nzsQ9s7BpC1EiwxspgpnPuvCkmGAPFaCxeHa2exiwakpv5bYmf3R4oZRnryiDgRQfxK7ZNr1WomeHxxqpk9ZkvQ",
  "key23": "5qag6TVFsnpUYdKFkn5xctHWFjRp7gHmfNw2pTGYJPfMRVQhRjem4soXCb7H9PPHKQZEkkpWUq5tyGS8zGyPSbZZ",
  "key24": "3c7utRTmwLbmXk68FTG4TpKSCq8fPnzNx2RKAtTmvG4Wo6cnYoiFCqd22Mhz7voe7UMJbM51RovN5a3ovFVMup6P",
  "key25": "54BqYwFH8ejXCvet6b8LV55dqVeoJbTLvi8M4oJD1ys98NadhjMZf3K517wEn5qvNTnwdHfcA1ivnDux27MMj9Md",
  "key26": "57RU42MWv4E77qBYCKuNHLtsB8uknn94hBnppDqKaNBH8KA75vrhTrCCcJ1vCSsCpBwS8V6Q13TNUGtFcpdpXDyy",
  "key27": "5DSJiES9U1mjkpk2hfHtQrNo9uCKCcyCvp9AoPPg8hz7SdvMyq5Xpf3H7kES8kNJadvoW78JosivNbBY8TJK7B9e"
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
