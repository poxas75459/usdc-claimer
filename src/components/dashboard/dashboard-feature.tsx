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
    "5JHbQ2WnUpCn2a1QXwfgpfFf4kNgkHgcTNkE9Ect1V3ukZ6JhRGkcpfBFx9DZSihp7bPctooQFAFHuLYdvAR4HEL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Vxp7HAUQpv16KoAyQ42bCW3EbbptasYGdkBEawJ6CfizTjjKrpZ7bk8KhFRP3zS65L5bk9KDUDR2ceaCL7Nt9WH",
  "key1": "F2hZsbsJefvdu8ar2G4gArTXeyZ2LNTfMchhpir7Uee957BYSaCAMd2zGd3CdBD2SZW4oEKynqcKazSHgfSNiXF",
  "key2": "5SMPvC8rHDT1aLvoE2EFLh6K63NReU9UWA1tyeSA8JNEZetgPVjR8aBE5X5XmUBQjZDiTa6n88C8gFpf7xRr8Eqw",
  "key3": "4tQXSNg7a3ohsRoxCv7UWykH2Pmn3V9dMfHqU9ijKQJV6hD4YrqbURQnTjm5dzAUrt8qwzba5vTY3WEaU1ceKZn6",
  "key4": "5SzTPMn7MoS6VVLTEFioCJJq5BHWVN6PxA2Uo5pykKUwyiWiRZdbedVq5ZHHUQ4tqbiw91frohvhCzSXzFcmhZV7",
  "key5": "3avGizXL92zXLKhPBaPuNEgwEQdbpHM2eFypgY5TRJD8FBhvMTQJrQqTkVuxBFWKNT7A8gA3wxnEMXCiKHNiECyw",
  "key6": "S6DzR1h35rpN9ibDW7SfgBjs7TDHoAWANLQN8jkeUtapLF9tY4aMRapxfn51PupKahWRBuK8WgN2C2mHhRhMYyf",
  "key7": "2NsFxuvcKHscYNEPfPB8J5FmoZZQokdzPQHicVwPFsLdWJdVvmvkhvGM8ppmqKtDEJcEohXG8MxyRJAZe5g6XDJm",
  "key8": "jBHMnfN6dYf4fGPyQeKVxgLr9Rz7P7TQLJPecLyjWNneWeoQfpbV8BqMo6rucWxkAe25dNuPXZMiRXH36YSfQQQ",
  "key9": "5QNa8N6ieXYwktwc3U1JCF7mZy9ERcmu7u7iA7nRmQSZ8zT71VJ3Knq37utYUStBpwHuS691Tsuw6R4TR1snwVG3",
  "key10": "bGZLmkNYLywS79ZjywymTQ4H3otyEZcpJbVA2u2uyt3Z2LxwQFxHxasuLrBEiW8dTQk2tnGpzdyxfUWL5R2fPaa",
  "key11": "23SrAbBM9dUPB8kLMXLWhVLRjB4N2TzuhgzgNe3rtkRFhGa25uV6XeiJAV8zq4hb16XR5K1kcJEHMFkSYzSdvygF",
  "key12": "4tnfAUfYXJjRd1PSFtarJFvAhMiu5D9b8ktoFzkVnQE4CMwwRzvRiAqSgjFyyfBeNrugcKEYUzJcnbrkwCZx2dyY",
  "key13": "5VvMvV6pXnjpRMVtvTGoXZVhSA3t554XSB8KsQEgYaR75yiRSa2cAGGoaQLwmckC9p12gcKm4b1csXBhQaJQaPce",
  "key14": "Fup2JYaaVXaET2h4sRGppYrY84xza9JqDmzHicNYYJVJiwRxWT6o7HXbxQUKv4S5d1iETU3zm3hKd3LkBjCqawH",
  "key15": "HczqnhkyVXn3ckW4LGmE1XevySz6HHPke5vjSpzMMdzYUmb2mQBFDMc7sEYbLZSzqGZyhYq9AD3eNc1mvcMvbN7",
  "key16": "2mnWbtTwQgP98h5CHw5W7LVhg3gg8rYugH1eGEevUMsdP9WrcKBZ6Nwm4DRPdCYN6uLDisbW6zcvERwMQwu1hwfa",
  "key17": "sjpQXW22xDgWQb3tjRaeybTFMoRAfa4Rqw8j4FMxfC2EW8B6D6Wp562VJRzpMSBoT8fQryFDmpF5WjRMAQzjfbm",
  "key18": "BGMkQaiVtu3qTxT7wr6dmvd8HjpDKsu6VgQjVKXu5ZZfkywh93jFi1QRmoiR77mwHPLprP3V1j9YXxrQx5VrZGd",
  "key19": "3W85kKveBpnnTn9bEoaot45oBwkBCy4zFfBiPQRg18FRLuQCqWePu1hi6JQ3w6cYHgJyVEnDLSaJ6exums1YVBgx",
  "key20": "5yzsAQ3jkLwdirBGX8kGLrStx6366CwL8f4WiwCZYhWL7T6qV4es2yvzMc8rXfFRpemnGkcFs4G6yK1frj41SASh",
  "key21": "2UMqHq4m8u21cTzgDvKK3acZQWEwddeT9jZ3q8R7Eji4UkedUHisPxq3nie4HUUEWsc7G1dmvD2nA8f9TAuA2CKR",
  "key22": "4BY7dNyQj9o1Vxup64GU3k6dfKNXfnceV5qTPKRuehZvKf3jrASks3yoBLwcF4TcoemigKQ7iwRQk9rcihhVXPpt",
  "key23": "4wwWHv4odpKdPnArz72TXxnLdQfn16Bkrz61FM45m2jrmPbLi6K3HuaSRa4S1YLUaLdGBANPCzVDcfqt2eZ6ZbRg",
  "key24": "5wqEFAgCmfenikpHmib21Yhtc9GUiT1aQQCQQBJVMavFc4REa2WEqpiBGcNhrv7Nor1CDAYURsyfdciYFyDoQipk",
  "key25": "2BdCf5cRti19RtZGmVWFEyitV1xr89YAnaKcr5kfNtKyxUfJcWBPV2nF9nFY6oyvyPR3g5aJNRVMeW2khVAFrjNE",
  "key26": "41PsNBgPJmmGKCvEbNk87BNkE2WmrLMW97c33wYaGcoMSMUUg2CJAQGaJyuWet9RGAQf4JpM4LeCypvQf6EmSR7m"
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
