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
    "2JpHdfFeyBEGpGCxUoepmwFcwoKQ3dVKqXZoyR7irWU1gGMfBaqEmGqE5dpJEeLTj2KMrdN5amEogsHYjzQ7cRcw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "s4Ed5qvUat512ETLS5UXYyVXiSz9trQwQUYVkNCodPVBSTRfBcdgCQQe6MnfrYDC5Xd896PimNRfYBHwSRecXP7",
  "key1": "2h1N4Uzc1PCKnfqGZyZnLsfXHDyxGF7RMUYaGCo2TdnZsrQserq2PUZKdYBnPgC2ik4XT6EN8U5iLvVZrSvhQT81",
  "key2": "27g4bVBwnMXSyrFPjoQdqxzXm1gWLngzBk9m7rM8DUrfiTEGhGyV6y8YpvVaPaxbz24yBsdjxn5dUv7UxCVZzBuP",
  "key3": "2zf5KhZ24uyGctokbGwaNNydbzuARmG3d6XtBZMdsv4KjC7cRi4ZD3aC3Ni9n4NHxpeHMvp1FqWqEMPHLFWCLkxP",
  "key4": "k5MPZeRpCSimdXY9QosgSPAwxhC8DRJAGXxJA6mkCS8XYSrzgcQj1KkEDpE34pbKLgFQwiaJUXqm8Uk8LU3s1Au",
  "key5": "3RGUAobpx3zFizLwb3yKZNQ2ScXafpkdm263xPJhxLbcA2gG7rt1Q8SLwF2mHYhNtEqAQijQM4foqyYcTUFdqes",
  "key6": "36zLRDkvdCa5qvcHoXxCofrBM7Vsc4wohi57emVg7omPzCkU4CFhMhs5UgApUCmyVsXzvi3cQdfJqo7eLzr3ME25",
  "key7": "3G7mzZeLPZsn1Uu2hbfUGoP88GRG7E8eSQyuHXtD6AZ6bXAeCxkd7LB6ZUWtPTbJ37YUh1Y4Tk8Tyz88axhj8Frj",
  "key8": "39HkSRyjNR2Kc5DDtCZ1hgALymMcuvKifWxEBubK11Usn1n2b6hsEdgTfzxRh838VcwGdWF9URakiaboXPKNonRD",
  "key9": "5duSThARgp7ATvoedgXZMci7izeQZG9as6LmFwusoHKVzTJPkPozKsm3YoJzTCPFCvtsNaFcRyNkrChyCUb4XT1g",
  "key10": "29jSHfPK4qjY6v9kTJJQDZF2iLJ9C51fE2yp89VoVrerH8imV2ogV1u5tYPRUj2tZGSHa7RmHs5hLU6RjqfrAWUK",
  "key11": "2BTZtPx5j54fAP4BU4UTN21dEsCm5rANKWBz4GukrZs5sAPyV2AyhBkrRpwxM5sVb7LtuXujXzKc9eGT2v7sMaKa",
  "key12": "ny6WLRfmfVXm63sCL9gbbiWoYDmrxHzdz3QXJjtHhxgJ2TZL2ocL7HoqXmkDNMh4jW3DjEbGpBRtuCZK8cQhTcy",
  "key13": "2gPGcjYTCJftEmBYsFozFp2mP5hWPrAJe4rVpukeyDfwZufxA2d8FPF2M3eVrkt1BwKU6SXjehjX8u2cFFn8bv8A",
  "key14": "3Ui54bH5xFmkzCTzmXW7APa7gvzfKhMzbdfibmYCFLS5TbspWhBGxbxXAwT3U8WmAYpqzQ2zoTYjpG5TweXhHNb9",
  "key15": "3wz4YpsxufdM54V9NWRZRvLX3qE6xWPWDt9vTN2visoXy7mPSKrokxLJvofGX7CTcwHLBDYK2BB6QsLoiFAoQL9J",
  "key16": "FtmzJY7csyCbyWZWH3aH8CdwSoojQfsK8cwE9hbXhT3bJAa4HpLcZc6BeZqk5PhXEfUuCEFnPdAtgA16k94F1n5",
  "key17": "4G7Eqsrt1x5JVD4FxS7EqBmbM8jXv3kwcRQsmUx9m1UMQMStiDwaKrWb25FXjj1MSaF8SBacionhbKoH7F98BB1o",
  "key18": "4Lp3LE7sXG6YjmQoaQPkrNACwf4xuc6nou667PRGY2qMDyPWabrufxVnUMEgYEHDL4TsSQ3TzV8KdTeF1v4miWMT",
  "key19": "wxiwa9vnjpuCYh7VGQxCDtkEKq72R35mqphqGHJBaMJJCupDErDtCVCWsFLo9Xboj9U4SbrxmxgQ3XqM4oJKrsV",
  "key20": "4EA55jHr4WukhWDx7m5HpxbaM69F9M6QdGusqDpgGxLo6ud74YkpCYbz1ZQcrrA2qcdG4QSGT6JQhzoModGfCt2Y",
  "key21": "319t16TUaKKfPdU72yv94sa7kqLgsnCcQd6TzdAK8sSdPsZgRcZ2VcnjzjqRnBcvTzRrsiYsm1d8tup4aaHfAUy9",
  "key22": "n46ks3ZpEBo7x353fpaDksDMN4reJ1p9EAcWvpZgGZUz6k8s7G7oeBMKXUB4D2yEaC8YgcrpgvrPcWT2YBTDXyF",
  "key23": "4Gwiva7FBiSsNDPjwK5LNGPxr4TXGHVUHshfyqPS9E76HbAMzgYt9e9MDGq3dxguXo3ogXjQRM8TYbuuFjRekj2r",
  "key24": "LwGR3htWj6kzmYq9tQvpez5SyLSMCfJ7tMuyWgFRYhqZLJXiZd6VubTBbTvMCZqQunSg2ucJZcH1BSmhsGs3FDz"
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
