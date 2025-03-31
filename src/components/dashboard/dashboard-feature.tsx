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
    "25Zk1urGPc75ycxg6fy6jHA9ZJqMVfsiK9KqbhaLeUufapFxTpkrmpnNhWBqnWF1muwv8s2EE3ALdar6tHWoT7G6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fz1rLkyNbF1syat7ppS5QHGzEpVYaNEWT4xucDZe1LTtLv5HxmsDsUuadTYKZmg4XaMtEEDSvCRin7VHNpMeysV",
  "key1": "3xZgm1kiLQs25CWuTxMPMY8vJH4s4hWxouPSxdYUbNhcQAar6mcZ2CLpmRovz1p1qiboeepnp4uT8sbyUH5WGaiM",
  "key2": "3ZAqLy2HKRAifbJNsdkbUdLqGxnaSHRABTfyXh1DAsxmuf6XeyqVWB1Ux9CdyJdcXKEk9FW5oK2iKZTAToy5n7w5",
  "key3": "28cFXjusFAtvaVjJoDsptiHZ2MPWuZ4fooK1EwdmNe7AXMdqUkDmxvkFxhD6TyjHFnc8dHG2gsxBYDTZL5LvmLHV",
  "key4": "P4MwhcmrcJCA3piADY4hosYgxpTDgGevgfeWDwemaUGyZxYDKRG4BHQQ5s4f8EyCH7FX4T8uLfn2xgDJJqURjyH",
  "key5": "4xEfcwp7xrEPiJ2hU6Dx6YRPZfU2n5TkVfUJr1eqZuUsvJxRCEFC1MRKKcyfKaR2WiBemawUJS8uHUSNDNt267mZ",
  "key6": "eDZ8UH5niLhdMveyQq3GCG9Eb9H2gKBFbb9yMWsTh9ZqpQknQ1JyaKL9zS98ZADnHbnSwsxxEQKrkpVE729EMiB",
  "key7": "iwqzpuwABo9vXS1NTJjSsDh5Fk8eEyZY8no2fKXYNyjWVXpuUED1XgDVgmRs9VZDWR1oHe9PCMKftmVaFoP3t8H",
  "key8": "53KuSdRTaMgBKM7KxGwnazG45PcgSzerpNtCmHedKdf6nfUW5MNZWPFgvR8st8tjiBgj9smteJi762RyEir6JW2T",
  "key9": "4Vz2pGwHDMEbjGfMVYMzgnt6MTMmaQz4FzqetVEegSAmHdz2vjqgZ1iwEgokQHpvKgXrpw78eQEdJVEWAh24EL2k",
  "key10": "2YQus88QjnBTiZf2DJC7CcPrNxSJRznBcMR9MPXx9XX2EMGMdixt62vtTiDg4T9VF17UsFXB2pV9NdNBNJdhd5dh",
  "key11": "45yqUWwahkvopygTLpR6tT3Xobc3tVj8r2fycZSnhLg3AcKW8YBRhbDnBemmSyr4TcjUavzWAuCW7qJij6zdbMa2",
  "key12": "5tmUShtWWaTa59FWj3Y1jvbsPe4AaApRcuxo4p4cBBgZc3UiyeNMyQPPMsx2tENLyCdsf5MV7cs9AbkbxDqCqaKC",
  "key13": "5JX1LBryf4bLxdSRRYzwiCHYS2es3BChziA316SBvAUCsDeKCGTjbk5186HvjVp6XXsnKq8m3h2MZip8zM7r6XQj",
  "key14": "4sxnX2AwfXxPKThk5iCfku31d1CjVK3FqFAm3T7HvNVA1aAnyti2jjfTfbcAGLciPpAjnSMmwCXNwqx2J1WAfjCC",
  "key15": "5rX2Ujzd5d3Z7saSNQ6VporAoqXgFEbQfoLhbn2wrgyUXT8mgLKqDZL2VrEuVY65Wsm38grhNuFkBF228EcpNNyF",
  "key16": "2voac9ThgZAGtH2Qcfne5jr29X1Cxbtpv6LE1edShg2ubvGDk7DUGsKA5VTzK4ZJM8ZegFr6FpkDVfgrySA3wZQn",
  "key17": "4Phsw9oLoYUrQmx1PZNguG4jm33Cmuzy6nrSwjh8ZYzstd6bnHwwGAVPEHN1Snmt1yY3GQR3k5RZ4y4tHQYLCwTX",
  "key18": "2DT1RKGExoNTq1vqGYVaEnizGxSihH8H81E7b9HNjKnUVWREJLfFUgYoReH2UqjVfDekVyn3n8dnvLcEw6nVQ8gU",
  "key19": "ugJs7ya9QgxsutdgXFeKk7mdNPg1GQFmubbkjUDJe98KSAHtcAq3ttNtPMdArVbqxjRzXH1KzkdCTarAoPxUTw7",
  "key20": "3FFmp6bJ9oUGG9wWdfDMe2Xr9yyv3iahbQBUMNLH6msPQFyVXDuxj6pJJXpwDNZxohAaBgFsyqvcx9wSjsXyEYb3",
  "key21": "5edMYogdCdmTDFqZz55UkPbERE8Au9Vhke4CBDx5n17pfSjGQ2Vxc67aXkSdNEdC5jS2Mbjy6yFaK7tdwLXxXHpC",
  "key22": "5zbRfdpeyBfznStHmWYxafV22nC45qD6zm793bEpBHENNC7j3kjWyVy5ufd99QUiULcS9ZG6DomBcMQHMD4VHw7j",
  "key23": "3ZGMsbZ98UN27RUCxQ2wjH5tzBJbwJdrDkrqW1Wdunqg6t1rbBVtYW4fBs6hnhg3xZSy3XSPvAycu54WLW3QRCWk",
  "key24": "3ox9TAeBTRSRRW31Zf2rUmtNSaD6GeET7WUaDHWeomgNdn4YANP8ijpajyJkUAxJYnEFa1USKuf74Tf1vEVaV6j2"
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
