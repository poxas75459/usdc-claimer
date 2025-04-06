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
    "5qQDARhRKcTAkN6C2j8yM89Cs5yJA83HQbiuinPf9BVXrhFD5jLLJrCd9XMq8BYFLp8s1owrQ1ceHhB4eD5mxU3C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ReK2kUoNMZN4rj4DhR2sLRpmyQhtoG4wXDXchRikv3ZVAqwSCFSW3jndssaB4Jj2SDRFeeYTX3Zk1f7M7LuV5VF",
  "key1": "JAxBZ2TTKksqtzEaQu5dh5ebcdJ8DvobKWBqZKeBvovVpLJFyKDUAUL5XtTco3vZtiLiUjD7ztMrEHaSHNXHpgt",
  "key2": "45CjEBCwozMs9SMsKuQ3wH8YzknhW569aziyvvY7DDrazAtzy1vqvpyomzQmsJJcF36dK82CLE6E6uHgFTvyhBf3",
  "key3": "2kRusGG8BeCnKTzX8jFfZSWCEGLVfRkugGi4uRr5UEKTk1tLk6ZptokrxWYsQhvZ4aKRwYMomFK2UzafaSd32wuP",
  "key4": "3hvmgNCA2a1rz8xxGTtzTU1GbRJ9BmpkNRghzk8EvFY7Baf4TiZSzE15hPwpnm5vszJoE4wwxheqMqoCeK5VfHvX",
  "key5": "2VqenCxcNUbiMrhFbKDvTupEeuCiokj47AYQB5aWA6hoKckQZDCivYhjwBfUTF5nh3EDaqJJ6wXLKutTvVwWE5jM",
  "key6": "xYWeXFuyyyxuN654chshSEmLow7oSeLVS3YdEKbHCaVzN6RUiEseqb4Btzh54B3Bus5D29suukoJC2iRUQQvAfw",
  "key7": "5vHESk2uF2dYGFyFpxe3YnKi5eu2TzuLqAExCkQ4cD1RRALEGQo1H7seVtT659MqMCgCHGCVgk5wsMbTK8Hhai6w",
  "key8": "yNxhMXhV1a7zYCVQsmwu4mPY3VQcemEsk3EgRsmmGcfRL52AowzXU72DAtYLoF8cJYhhnuUtSr5fNVUsFcJp4Sy",
  "key9": "3KiXmUiZdifUj3jgSShfmgwBXdYSFwohQzs8QFhMaNDT2T7sS6tC1XfxFqjCznoKuj67fYGr3HGPaSvSW4H3rxja",
  "key10": "2sWGwsB4W8ZumVe5BMXZjX7Nd6pWXyrAuz5SJ1xGmt7VG29qdVYMZr1oxqAgumuF8rWYBzkHPeT8UmbTZiCVuGnk",
  "key11": "y7GjPSd3wBMyJWvPRA1SLdiAKJL5LHcBSxoTgYvjhU7P44uRGCgEiNTj7mH58PZ3MWG7nG5cCAMqf3APoF5ZMq1",
  "key12": "2sZM5nJPPaLLRzshNRVmGyHiZJ6LynjNyHzWYW2wMDnHESHRab2vyYxuGPCufT6Eh5rZ6nfzuzp15cVCJtJYsXqk",
  "key13": "2wDWgAjDv5886Ayw98s2LbTqeFNuvVq8EoZKNkvjfDJDnM9UL2zVxgmMTFbwHBTRqcoetavCSzfFMUui2kvRqSbg",
  "key14": "2Kbsj4WE1aB6NmMEdSEteZw5BV36ZKyimk3bPFHayvhSbyj2xbg1Bt6KxBmt2Ya9keCG2j3XzVKFFhsT5FxFacTo",
  "key15": "41LHuuUD2Qy6Un35YYyNnAtqHR3CW86cbdUxSaoBiA1JhUHBRuxrCLGUABV7d4EXrtvitZBb9WsXf25xhPSt353H",
  "key16": "3PvMmQG22YohceEPE8KiAR1RowJDYZDcuaYeSFNU4eziVrcRcuCD6N8fEZiBirG9ft1B2qmeaAany6oEM9DPyfoL",
  "key17": "48bpGpeuZB86e25cmMrJkY8fRhqXANwzb5NDQFhsV9m2jLf8KvZjR1ys2o4KyE5t1FB7qjFfCoaiEk8Z7CQ1Ma4Q",
  "key18": "5n5hbQR3uspCj1o9i33hoKgtsuiF6dN9vQiQdeAjmR3gSaKP2hw4B4nhePq1iJ8HU1t6V6TZWkKitgjtvT1VCDNJ",
  "key19": "67FEdnmJaGMntPXXHY5oHeFcavuXuWFfKVCBKUGawgov9ZMVdvVds4DxtZvpAjFBNiNTWbtmf9NWpG7F6sxZTmAT",
  "key20": "3PfrCWpA6kreikFo1qyS87kv66HRHNoFgGe8t1vCVpRR61BNZCwgNfpTWNRZwZwjGa5qpg9cVz7VxavqQ3WFESo1",
  "key21": "WrEzHfX4b7cBQm3xv4fkX8GfaG4WMMagc8jr89XhwiZZUpEZ4e8HPNNNwxhLUB8j4wypa3U4Wox7MLhKGqYFG6v",
  "key22": "2f5DYJtj5aKiF4aaJcemyw6T3YazAK21gRTeUJwBPFeKBHJfPspqLJfpSEr9Q8bAN26qFHe8N15wdG921RdeD9DS",
  "key23": "5QnL9qfAY6kneJ4AKVopSm9HiNqptXxG4q3okZ1GX9vUdxKUtzZrFq9eramsRdVQvMPg24q5hVXCZHhb5A9pVeC3",
  "key24": "4dVPaMH7ey6t829yVhZarWfvyHBb4RZrEuKCh7HTjWihKhXbPQjWVMaRvCc8ib7qkyis1o36cbbcWtqMPXf2Yjxa",
  "key25": "2htbVP7b1nb66Vx6QGq3ckRdrY8SojQb9dUwfEbwMPj7sj2ywUXujnMtEoz7ZPg3bV1kRcCkPyC64hWVQ5r5qNBP",
  "key26": "5HRjb6tZasU3ANaSFMuhQpaJrv1omdNBmk1DVDVhwbJYo15jiTmX4Ni8MHLP2qhgbLi5KsGYwrw1fJvPzzbBmCmW",
  "key27": "4k98kFo5xUfzrFqMsYAPsMcXjaaHcKLJStDeP1TijnhwFPJSMqNPH4PGwjDXAQDjDGFsvcnGDogkmVePBCPWSwvh",
  "key28": "3doeTXj6iR72c4EQkq4JfqyCT2C5dhA9WHy1MHJYxSj3HBcf5La8EJRNpwBu1pG8GsqFjdrYpxwFTtSRgR2ACJj",
  "key29": "4UUsVn7Z7Ld23tBFCDcwXy9oe7XhLCoFxTkqpKAbVujKHe6geATzsdvsC8kwkdUEAjq1MwWy13a1YMeLkJyB2Y1K",
  "key30": "4BktSrVuMAoVXt6i64uhFU8RUjGK8sKVYWLD6k24yGEuzPZtrh3pePo3tL5sB7uBCCK5edAs5PGMLYDB4RkHP8Dm",
  "key31": "Nazu6upwSBLnUqKbhfjFrVrVfs9wUwMpNKbqagpNfKvrJK9yvVnhZSwyCxfkFTiFM3PSqDaxkW1ok2tTuNAKQjg"
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
