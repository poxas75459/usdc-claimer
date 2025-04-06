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
    "21cP7za4FvHY2rKFHBm3HR99Kikc2Q2n2zzXigEBRWGLex86JUG8aGkWQh8247e9VWkeM5ePgQeETya6gKjuERua"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "C4BiraM9CM1zU8NXGS8x1XYWQ4xeHHEEHZjCWgoHYmczYA1XgAofRR6sNs9R4VpwtyXMKHJ7xvoUx3JJPf5Lx2p",
  "key1": "2ww2bLPEs55vAPM8H81Gxy9uFKaXYZZJVEBXcRX3WN2VZJhLSD3ss5LRdetAfbiurLN4NXCdScyVZPLTmPHMN32a",
  "key2": "559cjy1WkjCB5BScDTefJK1oQWrJieKNHE3kHW99yC8fErqzfyzthZ5WndagFYJoLjKecSVDDDtcpU1LghvCCWyp",
  "key3": "4kSMnacY8tvGUrCzAhActqrR9HJZhCryKx4reUPaEtT26GThK95Nn2zQssDsVixHCoc18gjdH9R86R9CVpjU8RDF",
  "key4": "5CKEcLSeVPGxs2CrXP1id1decRQ6iMSQGePYBRBcbM6TCMJuH7hVDwSmLGye6vtYES7Czds7PfEC6a62iVTWYWMn",
  "key5": "36SnCVKgP7mcRwUfDhXM65gjBfMcaAeqVFyWFvuTUDZH9BFShHP3asL38bk8AfU6EDE2WzqumCgeaYS5Zft3xbkt",
  "key6": "ufDDEDiyv6GASt37iC8Q3VzSSF1g6LqaQVrJSxvDGU3gPy3JETgpoPzrfN1BjsNt3zXY8e3ehvJqUnEL4Ggohd6",
  "key7": "5gqiQjZ48qVee2SU4EkzwkdpBZdsGmVbvAfDFGa9EENaDHjryDtxNmN83GT2Lpb27zxZsCGZzPv9edbMHcJTER72",
  "key8": "5ioB1qL19ur8pZ47qTdirTpDNUNZxJzj72Qz51NbXnk2CwLCUpQwoUaptZcN5AzAgnRUzJ6eDux5VWN6FWm2wWro",
  "key9": "49B1zb2ioFA5RCvNLpNbKj46PqxjKJ1q2tv6ibH3zt1aK3USwiuUu8YHsXLuEHp9MeZHssrQwYrQSikzHs1LUMiR",
  "key10": "58k2J3swTNX8uVdmEi2pUFEbWLj5CqGhS1gNxRf3mZm3efajDSRpSnTCUr4dGCjARDvzRGTQ6TgekQ9rMQycApiV",
  "key11": "4LZ1cBiuuXJP5by6RvKMwCGaMrwXf6doS639EsmZnYqFyEe2KJkawBUbMPvWz6iUBuEBxzHFGhjmu6sJojX1ickZ",
  "key12": "2yzKUFemjT14yY6LE54xDeyb1dwhRcaSpjPboW6zHBZLcWyHRnX9XQqR55XagCrZrEi5MLHzFxDT9hWTcrSruMvt",
  "key13": "22ZQGTrnGZwxCNQAsqEMZ6uYN5PTtb3v4MFtx7Eo5icfgXWjAmFjRJrbMMu1Y9enM68kSGtb15eNmgcpCkcgwT9k",
  "key14": "qHTAk1hM5uXBk82NfKunLEw69XNUKHRVWpcWQypv1HpkABs92ry8WCwKJZ16eQGPRJhWfB1C6pyLC2Bs4fDXv2h",
  "key15": "4AtyJA7uixJ3fQDQEBeKxM1mo5USXvXiNJcDYCdnCS1nt36QsAeywF1vx7X55gepkhpY23evi3DKxJy3qks1k6Zm",
  "key16": "h9QRorJHauxdqeTJeMBesc1Q5JYpebeyBt2WU67cQ27Upvj79TE9Vy7VXeozPHia1aecEHLbpaThxBX2rRFg7Gz",
  "key17": "5Byunrv4NJ2mndsijsjB28pymTsiYBj6D2VNVB97nbZQTcJbh7jeCvxohWpdkacy4h3Vw2mNLEXhR4siD5dChkrb",
  "key18": "3f1LvpGPVMMxZoYZsLYj9gNsNbqy6fES9av8varQHLyzaMi3T3BWwNtg7QCK9Upe4p2h4tTXhEgLDD8DmkrRo9LE",
  "key19": "4vZKopRANoJsiP9scSVZ2oipCtdGCyq6punBTcA4TRSrg8ybiThEFq95oxfsjemCrXvbwYGJ2KFZJzQfoXVKqm93",
  "key20": "65S8Cuo2pLe66UszMVht3Hidwb7W5LXXGpRKktsgZyWosFUc5RtYGGK4RSk8yLzGGqErSLUXxSNKZvL6Zo8vKbwo",
  "key21": "2LQJHt7pLGp9WBfod3RLi92raq6WNN6UJrZdau55Tao1aHLEy8MhyPJeAwwDa77T6MFCH1vQdsubq6xjswGD3UHc",
  "key22": "2yKpM6UJR9FtNAiEz7gDRi6fLCXeeAVKW33riPLYtfnYxK2PtEeNrsJAMP7WYDvWWcqodq8BB44V67NLndvAXW4B",
  "key23": "ZxvLzkP5WT1kRWCdVDFJzhg3EH1kkXXgkaZwFGGdyYkAVeyRteJcKMbDMtbBs5oSxMAPrWduTgDSNeRBGmwNXr3",
  "key24": "3MWoaknAVK1echzxoHK9yKUQnjsgHXyppuDsiuWpPLoLXJQzNzr794eBJcUxzyPZToPQ7n5brWnfMiWN6wTwoZF7",
  "key25": "48i7vi7S1YeGYPKUYpCnoyGHTbUMUpfcnV8MADPDfiWh4uLHf1yTMsRzvSVQvnnGc8Bam4rNnSNjqXfsqhYAKGRp",
  "key26": "YtmCm7yFADwL5S1zSAazVQVzN4XtMH4gEfxZ5bZZWbTMvHMsof1d9h7iit4RZaDSQVEW1CyAFpPJRoPfmWkd8Wi",
  "key27": "5KwwvbRjJ1S4gGjML9kQWBwSxetjp3UBPVQxXDX7A7hCRk92ZhKjnQoqdCE8FREaMrNRqyeTDn3zRCzX1PGqAPXZ",
  "key28": "64ZCbwiSg1tuVfn8tCxRBxxHbFBvd5ELaq1ThDJmuTLnF4z4dE1DTwyZze5KMvoTgSjrJFbygTngYeS31iv1uQ7t",
  "key29": "5pu1ygCY11KVPdzEvBRJ6ejA9N1aAyyzd6muWhpEtLEGaUgNDBz9tTT3UGqJgp8q15w5pEEarsJHggxGX9zrS19W"
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
