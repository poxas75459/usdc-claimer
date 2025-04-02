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
    "4aXpgGYSA81fEF6Xb1S1QM8xJFfWF59XgJGMpDviQ8czd32sG3uxxr1VXJCUYe8CURoBCXqvx9qSBAaiBb6khYAt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cFXDCCqbStLCb2SpVUbzKE1cukgkcNu35BwRYPyxXvHFjW8izLXQ6nSLF3VsX5saEr3UhYEowbm96bZA4UdAB7s",
  "key1": "uufbpWiSM2nLKaVHmsKbUuUnCjgT4RnoD8EjQrNV5XwZ7F5qeXyqLQ5PhjUSiRHefqaTnDEKFzbDRA82p8vvqwZ",
  "key2": "4ByJTkJe76BpcEv7vC48KJSXMWmzgwzCu54DUnisvFmvqK7jXSz7byPFWqfU34NfLah4mGAjAiPo1mnvoy4C3QE1",
  "key3": "Q9dks5jqz5YCYKeYtN415RN6towPnEvMYv9S2eGwH4gFH9kgVz6FPVqigybop2GxV6aP9jvDREVwxCwWJLinpWq",
  "key4": "64a4pygjrHNbH6XNyHgFGC94TJJDbK8uyjkuyzkSckZWXxVqaFz4DEhKHMnGrXABdoRVoaXYwbfkeqQqHos9MPT1",
  "key5": "5u7HQta7cPNAGejySwrrSpz1L12jwURR1u9z5hb7VGQ1U5pNJzRaoEoe3fFscy8GWW3mobzCz4MDYgmQx5kFES56",
  "key6": "2nCw3QLG1TdWS3g1cBVxJnBLVMyBCfyjxNGkvFW7x4EC3Ymrbnaxgd2KCEZFs584SsxstomC6XazizpYfkR7a5NB",
  "key7": "3u4JNJk3Jgc2YsRLyRaa5ec6i2CSFTTTohZTwXnem9T29Yf7UqRPVCA5dGAfGLvwpm9WmKUqrQNuiEJnba4u7D1V",
  "key8": "4Yws2XQRHzS4voKNwRiF5jg2LAmQMRi7J3z6iLjogucNMb1PQE2ngQzJUDV4jq4DQmmENDsR3HoUCypFH3oS9kWW",
  "key9": "2RHiFd16hfdRc3gK3u4bdnTNVHT8mmkki3TdqTyT3uCdM66yjzMBYCWQH5FvBHTTcZLiMJH7Z4ZLHKRPbgB6cQk8",
  "key10": "2gkGEnUAJNdR9NLPCDMriRhxPTQSbXxGrsp89eMPBo9ULR3tg6ipzTqqeU2Rmj42vshDsh4SX8fJNfgRVZt5WWrT",
  "key11": "2ALytEt33neY4P6bmRfdkPCS9go8y3tpXPMWFvwTRRPCTW3pnZa6fyaAqBEoJYuvGGkykzgAJVg5kmU9m9EGC9y2",
  "key12": "4eUGES6MkNAW7enjpj7i5a3dPYXxYV8h4EeqxZ61Ku2MJuJfjzjfwEmkEVCs2JeVcXr5YXgXiANXcxyhZmdgbuwR",
  "key13": "668htBkw8L5oXSy8fFeNj55AYcdMcN9xscTib2diL3c6getSY9vBB9ggf3WVLcUVfo5mUScshLX4hARJ6a7QUYrL",
  "key14": "4tXdzuB415svvY2c8hfTVsSsX7cyJrpfp3dQgfjbBVMxqNCfxe648qepBHrTW74QWMvfZy7Nbt1YzstPa3ejwxoC",
  "key15": "3WS6Ls3YKfxDXPn86Z3Sp5UhAPKquqTEnfZ4kHJmJGPMPKxhruBySnc4gtLz9NNeWXWQiybettThx3mmnboGvvab",
  "key16": "2kB4aL7a9nZyihgueVxhNhoMDUZCpmfVYKVoLtNDGEq2cpTuabxioeUEVvAFdyP7rL48nwdJGYWv8yaXA69wVSsM",
  "key17": "5qbTfyaYpqAkgxbf446W4nGmhprgHYykSNJUm1PZyrMEa27y6etxNjDjJGh8WwFpvhYs4oqdcfvkRCMAqPRBpYnz",
  "key18": "3LNirNFrpRaMYgjyJQj2zmoDxDxGSo2a7Q4qA5CG2tRSNLY7DR4WxjQRX3phAGjRY1Jfxe5TygG654HFJ2Qh41gz",
  "key19": "4zn2WmvLRuDC9sQSyddiPFQHCsQqCEKFLiMCey7Gpe2qQVzbJNxFnoAb3Kw4pf9SyJJoBuC65ChJwLJj1Agm35Gj",
  "key20": "35JqbaNxSRJqjojYeCw58jEd3daPELaVqS3HJkWBHnVvRmfvBtUP6E97MSGvLC2AU55yasMdZMKTa7T5g6h7C9L2",
  "key21": "4udQGd1VrCf15gTVd2Gm34ACwVgA3PdZauQWLhevK88joKZgip4qoSrnCrQy6nt39tdn725FPhosVGXHUtMFu5T2",
  "key22": "3HW6wJngPYNTdPy4hZ3EhHrf1XSNGdXk44NiANDaDoTCM3mqXhakjAfhFS4RhvC9MdhWCegGw62yZviXj894s46M",
  "key23": "5ytXV7cHB8AeqNM7qiNzjDkDz35JAcG2YRDRFJibgp4dfELGXuy4E7uJzgaZcsdYV4qRFCVw7qUUSKij3dSJePVR",
  "key24": "2zLEGYY8j1SBSXds1xSd2rFhJ16T5MdiBm4enMftah1rtggUSq3ySksNM3bpESuUQQNczQH3YLZxErquaPGSKxns",
  "key25": "4CcvetTdAERv43DBMopdjHAUbEEsTtSgRxRYgLcsBn8u651fPKim5rLLRdRXDSk5uJw8ippHz4G6VphmCo8Cf3Wb",
  "key26": "3cN7UaDKWRMbJNorbeZtKVQLnWvdbGPFx9pVuMcMwfV2J9ZfwnqRZMCGVKPhqnumD6sRkAoB77hYwZnY561gAjtm",
  "key27": "59XMtmuSkVXACZkyERBpN6om4Rr8EMAycuWWPB1w4q75eZH8hLoxTM3MFCw8W9H99NevWZLpBgH1DWrdVRxGfmjB",
  "key28": "exu6CWfFZrbf1P1x3JEfVv3THViRqVataRR8cEXHs3ozUzXBdPaNqzketQ7XCJyvi5A1ULyDXD2ktV7aBuMbUU9"
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
