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
    "2xRKtTywxqxqTTmZYa4eJmaMkunjxcNF9Te9u6WHCZaCAeYLsDDakbf94jBjjqdag9meP9aK1nxfRPaNLq44ZQEm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bWN5C3YdaWdY1Lw3KxirH8cN5qm5UrQ1fvBZMdmfB8DoL8N6eQ9tr31oXDmJvTBFk27aWjkNbaztBhjXZ1dPW3X",
  "key1": "2ZGoypy2gaNXFHCAsGn4HLt3sRLYnnCioU8LmkBUooBGKvesMNMccf3dPn5mFCnmkYgTmodXJoTfi839XgseQp52",
  "key2": "2kT9iZmMiUjMMU31JuAug9oJbz98xpj1TTw5nBRyEq7HfVwUFFgyALwYJD3xbSEDZb9rdMLWEojhbP5Vs9PcUfwF",
  "key3": "2EPfYnx49ZKR6aZMPAhips2QJtwbv3oYNGX1jiLAmbc9EAoeFiKyYBg5bDzqB9gHQcT52r9iwndGcg7TyfFD6BJN",
  "key4": "5N8XYL2dTvtVrCcYPzAWXXpBMWvmwqyrpnfrCgNjms8fE8nXWeoRiyfyWzwJg5ydKw67jB6DMJHJeSQ1wjQwJpRx",
  "key5": "V5KYR2VY1v4zJmhXEcQmzL1K4hESRvTBLitUKHbK8CujANyv26cdRkHz4t1mBCJ71NmU99yoj8apNdidwTtqUjk",
  "key6": "ooLS4TKGBXUaT1NcSDBJ99cWFV6g65khqiPf8x9PPAHPCNSECsjYwaW6CETigig54T5xMCoPgrfQth6qfp21Pk8",
  "key7": "6rot3RbjzfXTXXnrLG2HtUrqmRKTLhD5Mx3xHuaACzNSgY98KCDwbwepmTVi4Ge7kjbw1KoFx9vNvpZRUDZAoku",
  "key8": "3E6GwiokMn4QTLWKT252Dz2N95Jei4RnEeH2U25dZMq3S49ZGSDxaDuaSQaner3uJyihBjoGWzH3XRsvoRtn449o",
  "key9": "Y7dKxdXUU6VR7nbAtj2VsvGyZgG3jM9RvcfzSBh3gkcBHi4mUFzz4GrmqfFstRTdgGJZyCJuRdLcdWK88SenpVn",
  "key10": "98QsTXtWP7xeegYRMpuJAfK9T9UQFLScUDxzKPXMxLJiCaebbt1p3LLnbfMtmmYsX993GqCJ6yUf3g7p5rkwvCD",
  "key11": "4PcACp3gKvrN4wyGrEcaPMzRSUkAUEtdihv5i1dsWsrjEbDwtfA1pdSv2Ph8FgiUDtqmbBM3m71a86Xwf85ZjekC",
  "key12": "4AYXdwAv1SSa57LsTjBFW8V5Q71bKng1uKNrJVyCgewE1bkjugxf3xFfUc3Jr1dTtHUHyb9TAA9tdop4PBvDYVkQ",
  "key13": "4Tt51UV2ctS8TEKUEw2pD2Vr6wsrfc8dN4S1XoSmrY5mFoJAA96P9cTantquw6YZ7FGgtfPMQG7cR94DPciqsmHY",
  "key14": "4qucZqByvpdo9e5PeWc21CjvUR7E7bT8RCYuvqk3QLFXa9GmB29k2gZaNizYpxHXLMW1DqNMhg73Vpk5vtTe2698",
  "key15": "2eMAnDtuQYrhKzBKMZcvCwKBivtn72yZohkRDziBLzu4TYevnBbG5iHF2p7BBZWNxMhJW8jeuHftyAgQJkcfY9gk",
  "key16": "3GeC3yGqGLGrHBDooZQCwtH57CrNwTuLUDzXPyC6CQ516GJHx2Lp3YGkgFWs2smaYEcEdJ4A4vSW5C4U1zbgtqss",
  "key17": "5q2yECipUK1asZF7Yaqow9Uuznk3uQsPtTpnkBEMApAcNyg6r69pyziZYMAR8gPXJaUbe4nUF7BiDRaENg8kWVPf",
  "key18": "3FjhpWgA67LZ2RpYwWgsH8KNz6AEqKj7Yi1g4sybT5ACAA9ot6yKz8JZA3kVKrTYemEQrujkAzeNwBiRyVbrAr7F",
  "key19": "2MtLZjUcdWgbAnR2p7xkLP8AZ3k4z5ZPuG1NqbHhf15wXFrMGE3RgvCnCNuFvcPJhfz7TuJJnyjo53FSkCD1y54C",
  "key20": "5Efa2ftXsvjsqWR6HzkBspKdNSvLroLMsqaCYg2mEDRMdZ44oWenKbyw194rQy4qATNqzgjcWirtanW4tiCmAbij",
  "key21": "2APiGsHsPKpNMknKMrUscjUJjUZUGNNoWMTeBEYWfbLRbURgRcxmXFB7eb4L3wYmeXjX7X3my4utq1j26YyMz3g8",
  "key22": "5TMgmDVCtmTVVPAmT3KC2Jnb1H8rFAGzp4HFvyTDNEf3AuTeWKj8oxBaeWmbhiMwLyxJ6R7hgKCAMC4cubaGHs2S",
  "key23": "5JtqiJTByDsTGYUvxLp1YZSKZqbZ8aW9mRucx5P6AYs4MzjfZuTH1kK8te5YLpGFZcXAFu45ZeXstwT2hWJbFncG",
  "key24": "3t1CNs359DH8M8TfTtqpmMTvncA9u27EdnAe1cAGwdb5GwJnSy28HmR8rsDQ7bDp6C6rJo8ZYuyYMkJE9uatGGQ5",
  "key25": "5Lthq6LJHR6MrMuQwAy2Ny3rwLpvfjw56WtHyfifbcCAXBzTG2YaCmKarBd33YcFQwbccRH32tzJ3a4MVSJLoYsF",
  "key26": "4xD72DUQVqu17h1rUv4RFtcKkT1ossybDBEiyVcZ4Xizz9Vbg9Gr6qzs6s5Y7ssK7ALg4zDtvE52C2xTSm8JUhzV"
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
