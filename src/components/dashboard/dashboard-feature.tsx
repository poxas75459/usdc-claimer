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
    "36LZwF8J8f9cPxnHJXQ7qKJYBK8psUpYufvNpxc2CEAxnJcSRru68KvWWrJ3ry4Zo9gZzys7aqdJzZDHXq6Po3jw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WTiE99s73bEuJiiixPMTw8zgyyrhhda3QscCCx4E8xRZD3WgSSH3zu67FxYyWNBq2x5CpFF5WYsqyhryxaT57KT",
  "key1": "rHFsNjT2C6DR3VQwziUkcnVCyKRpQ62tQDfoUFjq1JnCC2BJuzfkfpLVUkzNwPrwuqrFqzfgBMuGziuT3gzqiCr",
  "key2": "HtXQmZ3YzAZBchQLaQ6VnRhV9zLyDZKW8Co7aBaUtohfBZ4a4nqpiBDwREx67Nz1W3MkvxUir2M61rCX6D5keyz",
  "key3": "GWcjrv2KCoDYUMAak2q8MK4b7WuX4CBrWU9636oG25JNjdwtdQDPXqY9BAkocCk7cyPQwWVKDFoUr8cqCXwzMAh",
  "key4": "4ZCgq5ThvUHb4GgUq4s7uMi2qmjUnW8nnkvkeg5jZvTz17R1S6yq9371YHDkipqD47Yn7YbnErU86DKRcqzRhL6j",
  "key5": "5kFcJ2j78LEdWLjSJHuEmCXKSRDMmM8g8HsCKhocxzLnZkP1UQZ4WFgZoEPyR34MudCgTPd24tSFxaLRpmY7TN1",
  "key6": "mDephJQbHYmZdws6CsjF16BxDK1xmk5F47dYRmok7q47BTSgBqRd8mU92Bo4xQQ3CnwfaRgmoGXfwQXkzhJnx2b",
  "key7": "jSdoyXciNwG48xmrNeBQsCstbdpiGC1ghce4XaiZfEnEw543CUBHyi5sz54kn3to3cS9eQ2PYCWQrVvguLs8C5N",
  "key8": "5d5Cv22echSw9phnxV6YE47S3ycRdprPt6G7sjmktnk7MuwDYZ8FAvdFMtdiqaSSkMNQzhdfjdnRGKbh1TBacKqf",
  "key9": "288HsgCyFLS8fEfz9DZT4az7xGfcdsYfu3D3jh4v3e2T4qhvHvsRDpqN18KnkHmUUw32mkE9uZTp6Q2pFFdtj71r",
  "key10": "3d699ckAUp9BQBHbdV5jjZN318dVx9DQauBbigeTLpnksxyXyRuZ4oH8XxPYJndxCqb9kxntAiWxroQGBSkqtoLc",
  "key11": "51Xnnrncscia1xZksiGa2BN7GoCP3AkKUoEsHWjdg4PtqF7WxrzBAjp4MTKDqv2wzijDMnJTmP9KqPo6LXXpEGP4",
  "key12": "48cZ2N6BEJWu94VuvdziWBNBiC5JHzfCR3ESDoQmCdWCZ6EMt5EEsyzDjsPTFZ7rGNh3NoLPoVdaxi4f8qvAKjK",
  "key13": "5FRDWuwN79jJGKrHtXfWdFE4Vh6r7Cv55KFFp6uH1EiRWcp4t18bXduUx1RcT91h5x7KkbMNZhPn4HS6Jt7p8dVC",
  "key14": "zFDke9PTTjKnYNu1vhbZP2vwV99hF8389YcrsHmgxYxbyma97qA7QNZHhDgzLBDvga3wK7GrQt9Lpqrk9DwAvvm",
  "key15": "4ZQe5RNpoGTGazSQSrKwfJfLubiBMa5K3G6eFkWBcMTcLrsFNDdoCpM1NNLB94CYz62AzwUT9PAPa4im4bbcWbDE",
  "key16": "2jYHZTxZmc9Z3pbLqbW6nuGCjrdTSb1UKEQkXNLiAZYWi9r7Hi3E3r8mP7bJ5XebSAZViibCa89CHfhdqmhd8J1a",
  "key17": "5e5fctP5AxV9epFB9B3XiKBPBQozj4dQ2iTVmd9YKuPABsYUTTpNbfHBv7twxt1xhPe3D5TtYtUdxGsT8zw7Zhe7",
  "key18": "KvGSoZZyvUKvy2qnrBBxV1djnMDZ5GHZvQr4MogpXq8Qd7oPCsJz7XzNz7CUDGYmFPJqhoc8Ex33e65BoBPsK1b",
  "key19": "5a1N16zeSXnDnhdUjYKDpHsSTne557tyvLo1LajDMKAfnyPCush9C9Wnnm3JX2QTC8yKKdRxMbryZ3JuWKNay1vB",
  "key20": "57RZqFaEwgB6Z4YV2PhmZeyi5BxZNNmA5Fj5k4WZCDLmpccro5uPsvJixrGv6CiVarWuxvBLezpqREaPPfa3yWta",
  "key21": "4gGKUTsY7X9ve4D7fyPvPSCHFvCk2PysxRRM5B9GjFVPYApzTrQX5qTywQdeanaRG3P3aM7RMosRftGEvEVVaXLD",
  "key22": "61ZsKCxyfva34knV9DZzDiMLqZ1DQqYRkqBEPp5XuyNVrvNUo2Y8RtwEX7yhHb2uZCioMPBk9bXb7QBoV7zGPWLh",
  "key23": "379xajHHr1AESGiBWQrE73emficMaymSER9Soq2XfJwunbf4V2HfbubmsWRzuFmC48yrb4kHZxtCoKpzJXhgmbyF",
  "key24": "58hpdZKmGYgwWWZDyjKEkE1qm7LNyUg6jzfDr6qJBfWX8neFGMkNzRkJzbnRQrJqEvzDXfLwBpgNRaLjg39oSBya",
  "key25": "XD5EpdtsFpv1YsY9XjgPJqWJuj9hKytajUJUPdL2napurSuR9iWb73mGfdku8LMtwNdFautzAzFxqKiBmdGNgx5",
  "key26": "4unpHQ2YthF8UYwojsi99HtHLb8cnP83P35EwEhMwtuxUj7LXwF7xGsEm2v1qdvtjF92qehKkCLuvV6ePqRut7og",
  "key27": "34VNctoZc1tiYRWcEGidcLyqU7asZsHbpyg8WrktzF5SAKRQ1WRYFvJaFNW234QpZbUxQ2cZNPxubaQwxHMUCD2v",
  "key28": "2tsyzo3oQiinEVE5t4qb65qZHTQj3HZLfVeRosDyqfjKWWKjDG54snjJsE5YuBqFf32HKihMbHARqmUjatrYMe1j",
  "key29": "334DcJ6rPUtwMv6dqsoULS93gfEEFjJmgSFLgFqHzB78j55E4CNT9iyERf5sjNUo3e1yngorNbxSnybpPkDX6nGQ",
  "key30": "wUTAt24Y7rfXPpsvKu9QntccSPiMbaYBoPT6NaUhRKMK4CZ877ntoHkC5B2tSwVjg24oPQGdW6qBGjoLDe6XfJJ",
  "key31": "L1KQEETYV1ktZ6aPnccyx9E68wXHofhJ12AavyXvkRGxqucU6jzRPvpiV2Z4We1YyxXKorb7p2q8XH5ZaLReVhg"
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
