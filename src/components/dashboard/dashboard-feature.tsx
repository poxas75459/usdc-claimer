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
    "Aow6nvhoM3Nuy7hafmzrcVkiYkLAqXeZLFybD6jpPfYbVXBw5VhqLAsr4oHREaqtwrsZmkKXHiJmHWt9yvxxwyp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iivwzsefSKUgrRks5KC1haYb8aK44onsAKpCAsLd8x72QK7cDJoVtsFzNqWspKQsRkAdcd7Y74FYWPHV5jQQ6RV",
  "key1": "4J2NpAa7MwDLaCdMdW9jcs4He3EHruxCbsC4N6ahkdYtwWZqSwKdkqGut1cXouyjWETWT3YRL1xJUR2KEvigonzs",
  "key2": "3Ucr6QqGyP3HozCaH7VCnQT2f1qZjz6gDG8ePoZR8fmYy2UDFnxfUAiNr2ETEoY39dTtkz3w2pEt8hxqAztNFuej",
  "key3": "dfGHGwPFoUXyzVu4EVpuyPzsxMty7V4VhVixs6BU3o3T8eXPiyqh6KgWXRP1efCZDiouegMWAPz3snCcYgnYdnN",
  "key4": "2nWdmN4n6m77yahZ7LGBmUuP564b1SBizwuLbERKeZ6ntZf3WhVbyvc5oBEiuPyDDpzkW4pAUiMdwYX2WfCjp3j9",
  "key5": "8czxhGrVAgHphf58jpP3L1262dUAvN5uyjEFMrEAugMFnrJXZrcrLacxd3EEVDtTGdDKj9d5F2bFEcPYZ5hoYqv",
  "key6": "4UqHcZ9jSsdQRPxjSV7MyC8bDXmzzGZ22JyKnSeEnjjFn65hS2LMJu8UaCFgjr2EL7wfUDLShpJZjGtBEFVCr7sC",
  "key7": "56QFSzqQLmhXKTLQohVJcSfMGVwtZSYgGfXPK3DiaX1vPJSBgauvACcoL3swAtZy7AxNdDBxE4tmdsLJy8acrTA9",
  "key8": "2RHyBHijpEgWkPjX12AL9rDY7mi88iEkJjmJuW2hdF5Vzrj1GMTh5vsBbbZqpGzetXtdAqH5RdZG52UEK6Ajgh6P",
  "key9": "4Ap8R3nnci3GJCwhiTKnEKxZRzFZiwdwKrHtGAgm1AZ7m8fwqUuvbFFfvQsUP1RRvxqD3xps7MEwxvHcFu53CBt1",
  "key10": "4Re3HGTnGRWYdcAUGF2pLYXqxscGfzqxhPmoUtjtxKWFE4i5wCWpaEauQKQKw9VSRtz3JS94GYLTUhJeZAubvNJD",
  "key11": "pqdK5mUQ7n3ezdqvDcHz8tknBFGGAam7xxfnhvPnSeHpmgQob2ggBn4FJLsD2YN3so6ZdpzEMRLjrrG9Ddp67Rc",
  "key12": "2Ym93JBdG7JA2RFW4eoEMJGvprqhq3TfvjJMMatohnXyZ3qq6UkQWAt3fzZztcaEsaAvhhkiQHENHjUzUkwrU4FP",
  "key13": "3R49SUnnQBrpuUBgHqgiAq8JbueaHahkAnhb7W6X5Zf4Jd1S2w7KEDBHHrGoGTDbBmYZz7NcyqpFo4iCpANNK6yk",
  "key14": "51YYJWbGnVK88pV6RBP4L3dqX93g4YzBgwAGEqebCnpB31TPiJ7fLyae7KKEc7ReGD4fPTBUYavvJNNiA3Y5UVLt",
  "key15": "2xFYdqnBaDDzKrWib1fmgeWrH9rqgTXohwvhxG6xpGLr6sLkAWZjnSANhwmbGDcEix2CicseKNJVF65axmKP1H9d",
  "key16": "4uk7oYNrBW4X8ooJbLzbDeZNwQmwmwXks4YTDMeqbEhnfX55XBYcPGa6LPDhuhaySmEQaL7cn91jQfbJjnteRpoo",
  "key17": "3QYWPRAF875PHvMLQxrEwNHtgAgVLa7NdCHaEoMGnzZJi8qNrCWSZpAYAK4hhz5kqzBuaZydwnskg5xq1yx3u8HG",
  "key18": "64q3mH3JdPciZV6D6ezkv9GGqmoWKWoWmNt6K61Mq5uusikUfmebEHbJttFjmGn3o1iKgLPXf9D1USw2RpZDZbL9",
  "key19": "3XDQvj3k7N1diFF4i1kPJ6jpZQSR5HheY9mPXwfQDE9LJqTCRwtHrhiPv9iY3LAprx9xXAZewbKQDNqpS4U5WVc8",
  "key20": "gmDLrLaVGyW5bg5uqgDXyjo3uuxGj6Z48yfxxX2VL44Z816YB7Nw3483zVDpihvF33mgn2sCf6aKKUb5F6PpMiv",
  "key21": "3cY2fEtpPM4PauvLsiKM1AqQRSQaDSCfEP5Lnetc1PwgeYnGADGAuyQYV5FSNJzoPYikkwYu8g6W9yUZLGzBUKZi",
  "key22": "4nawzYRGtpCsSrmpf8Pi7jSCNiJro7FKp4cMbd7YDEP2i7UvkGPt2tM9SdEUre7jP81QqvcrpPY9rhuyJJ5h467y",
  "key23": "4g2x5FAyFTHx6eeq76TZjqtnrUrFS38ZKTnYaY8QL7SY2j6czQGydaAN3PJwTFfx5uA9B6oPYyUJEkfsd2eHZ5z6",
  "key24": "3ZG4wzp94DsZNQc9unF4omggLg45rCgU7qbwGqSasBCDdXqc5o6Wv1Vfm6bB8sh72ngGyCozoNnEVBnzwEjSURru",
  "key25": "uo5dtNQ51vK3svBgktPMhsCVEpmXwHZ1kx2YAfdkmwKELf3Pf4U28bp15LriNC6JMDp56pdJ9xvU4wBab8hRGLq",
  "key26": "24PCzVrVvze4nFuUja3ngc9Sn51L2x8YSGDdBgdT15DZeXo1k7SZgCpPBVD92tiXctXq4egT8RngeNTrrFNpDZ6e",
  "key27": "58zriDdFj4hqz66298v4Y4hCJmZb2qymoqvPVEz21kyR5QtTtEkN7R3KPS5yPWg4V9RVPiGKcq184g4j8YkwPUHX",
  "key28": "2nSmiRFA7ZiH8Ww8kR7DNUEPd1ZwAVmPEDjTmu9Ksk8su3gh7E3FPTLxE5V6quRbLLNdVaDwiUcDubvw8H5ExRMY",
  "key29": "2fJBC8NXxcVgeLpuG8HfbQktbvFJUuGp1gMBUPRGXKERsPiEho5U4WGX4yyjtTB6gSAqeFJoTuE8sPMdHp5opCJe",
  "key30": "79wN9tjHqtQV4mPjiC3RL1rN4jhGMEzhkvM1WAAsdcbpPuUXBgBJjSTDRf3PmEctbyLPAAyQZM9yRs6KgScHBLC",
  "key31": "4DkzyaqvPzXxaBt2nRcRDfRiTsy7cP8FT41w79R6eYELTyu7YC84g1hRizntXVhjAzvsZ6TkMuNziAdZYvH1kc5o",
  "key32": "2kHJuiifDvRbeVn35eHrCUfEZP4Xo7C8iX1oEdfJCYuSJPPpuoFpC9DQcgxafqymvLvkA8c6qzGKiMb6CtvTvfL"
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
