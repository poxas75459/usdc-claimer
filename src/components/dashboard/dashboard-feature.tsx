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
    "31Ds1DP9EoaoDSehX4rfwpqQ2Eatzbu1txLi9K4B5FUS6LbVwHyJfaPLzYXKt3z4c2n2zD7z79gRfKRaPhX83G4V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kcUvnwEqHgs1KzsubKJL3HcSCik3fwuVAK9MMn2JE7qnkQJBKjYYkywEguArSa8R9Xi1WoAjZx19f9pdRkJeE5w",
  "key1": "2BURiEZhk2MPJJpyTu7CdZBKf3wigMCv8h8Q65ErYstYekwaErDumR5gacvkNzLsMYKKSpCePYvAyhUcaWG7PU15",
  "key2": "3niRokSc1RTprxroBLtFrrmaqEPkDkriMNoDtuZkTZMV7QqhEWjcg29FDyVp9UZsjNnzymXEYsqq7xUEqbvtvnH4",
  "key3": "3T6ipW6445qCnkQHJKkAgpiqsdAMS4d74r5vEwrMbjNMMLHxB1YDzxYRT39WVk5xYZkgEwT8Fj87U7p8GPwwr9Qd",
  "key4": "2BpyvCqNotsvknhUit8UVJXk9NnFmQTeexSCMzR6C2aUTTR9X5owU3JLK8pZFhxQffWTQ3TyXkdATHcVYiwVzNH8",
  "key5": "AAAzEPXhD6pGcpUeH2SP6gBxHzJedZ9od58GV3uBapDaQsNwEK9uxV5CuuJ7M6ZMBa2Xw5NGRJQ2rHFtBBAyx7G",
  "key6": "5nwmSGJS3WZJdrAApXgXZcaZtDWLZqE4RfEXYTi4u15viWAoJuB1jo9D7ia8R6fDPQXGQCccNb3V9GFnXbWBhPgB",
  "key7": "5P7gwNQtyRgHt4gkUe81ckWATU3YQQiBqxK2ErZVrhi78duEHXC1rTMfbbAezGiPvhmuhvdDeNqf1SxGjrK9NWTf",
  "key8": "4jFeTeWeJwNy4tvarUCWpSC5kyPPGNPoSqaqSUpEVtv6vkek8JmTh13XNvbWdhaxcTL1NVCQtsakMDW2XqCUqD9p",
  "key9": "5BiATJNBTpVQnF3J11PrVA3ApfzrYK2mPAjtasdcEfgoRXUBUbtqdHXtBuHgGJ2wXHCcVyc5QnuVcY2jH5nzHmu9",
  "key10": "5morgdco8ogFAFaQ8C3QJh1XVCnqCwdszNsWwry7RrF2F11sLhBhAYfWZTyiqC2XcWQafTvHLUARBk9WRP7GpoPY",
  "key11": "4DELNRNPmVNnp4SeAoRpY1cuGE9rdW5Jqf696FDYpt5fnxVFcSGe4iq2drtXX7NCQr8pkWivciiWFcneA5LGxB9Y",
  "key12": "5PW2Xki3EfqXPvyLam8wivMavTUDekiUmAKxMbeF7LjVFPRBJ5f26QHREomSPdrskfpcpgDEUQg7zHZVRk9DerBj",
  "key13": "61tjzHj4ryUUbLwx3g4QdNeFBg8rDsh8Xhca4y9eHnFqkbDzmfa3KP5n2fNHSSxPqTPSBumsRCN91TSEnqpMDC7t",
  "key14": "2Q8LwNo6mv5e6Eif2ftLw1P2c9ayppMjVGd4QnCaKt8ZTPKvjNWYvXT2YF3gfjDXq31uik8DrK7o6iK8LoNgtuzy",
  "key15": "3dbP8noGHfXhoZZGUFdkS7Jv16PVt4hsN89B9tdzNoT67uUbYugSohLtiyUSSJgoozURCg3Bf6iazzehBv7YiZoL",
  "key16": "Sehb5GK8r5pE5RZ1VzyWzHfiausTRSoypWanYt8p6UnUAXMeTD22j1SeVi1ALLPTVXDVvxA9k97d3RiSc3dfHjV",
  "key17": "4nmcuBD17sm9P7aWVSqcvSnEArkTvoeHBJCZtnHuiPbYJvyKdnxZX3yxkR9ngbKn2qQX2dsgqQWXFgDpMd9b2ppL",
  "key18": "3HuLrnLkoEp7mxxXJ7MHsodXBFqdUp7w3REKbAepz8DDZDxFoqcj6HGbMjKwQwdGWaTck92VWyLtb5Wq6rMfDT4u",
  "key19": "CQPX2mPReZwRfXx9sPTJ53JMWjWk8YBKK7gxddWrEtC6te8tVoJneaMsdm4Gy5fzSdmvXfkPPF7h4VB2BUaypX3",
  "key20": "4hPeXncoMiXQDkzyFjk4k7tiAq9E4hoMkBXLtmMBXMrnyYRZyv63eTAHyoMrbvN1TUfCeVZJf6Q5DmM95U22Epq",
  "key21": "5VA2RskU3BA8pNXRpmGeNFCrWZvyB6XpTLWGw2jeM6KVMaSCzVhQXXpMqo7dCMzcnnZ6YsBstnahDMYi1wRz5x54",
  "key22": "2bnD8oBrwxusYLm2h9rZG75TDANgRAUjLyn5U9pvRwimCXvAAAUmqcJrBZpChPj4uL5sJj3dPwWSNsByyuXBJrDa",
  "key23": "4DWJiot6Qe1p7E6NExNoZZxJt6C6pSGTZ6zgfTSs6wjaKBv5Ncjeap8NqeohA8McLUhdMDrnDLUhsamu9ryp5tZG",
  "key24": "4HGacY75BgjGGPnmGwixLmHrmsgDrSk5YPktBRbpv2tFKuJPHK484ndVqQs8Cz7o8Zzy8UhvMZHhEdeXbAUDfFoY",
  "key25": "ApCbFPpz9gZ67qcEu2SrxmRPG92fKUrPoKkeuU7JdeX9eX1odgeEDKW4j6aJne2y2Fwxsx7aRsDWz3Jo1x2yWdX",
  "key26": "2NF4Z8pVF6t5dNTTFuHBeAGiFZQP6667x5BvEJjwFz9yYQUttMYfmCMd7KEVjrBfuxJiXbgTeamnNA6JEnWsArwQ",
  "key27": "66mPdpDTyPAAEG7fJBcYU7a7Fp5aiZCAVYVUL1qQUVQB4x1p3Edyjk5VaKHbcxcm6PgiBG3aNodzvysWxrsyUZ8q",
  "key28": "boLYTksBBKd2zo9dMEuUbf4gi6VDQzzGkKZ4Y5JCjGVTNmMajBU2oquT17cuxNu1rGg9qiNmGpMgMTCNdbY3veS",
  "key29": "5xR37mb2GBopt2kJ5i9kQ3dhkJx1HhgP2at4mkVRouUFp9mvKm4UHgaTzLvS14uFt7rjvj3eyoPLKLFUSxD1CqkG",
  "key30": "22bSystdr5SjmPRbstp3o7cp3hiZbeWFszigopAcHcAaFYA93QsTTXcBtBYmPZr3yC27Jzd3EfSnc5K6YCaQpmx3",
  "key31": "2dBth7SVvB3wDFamxyymr3P85ueRyBqRkDFMn9GKuVYmENiWTMATquthodSezJySiriM3c7aZn6Z2WKoqCzfFwWB",
  "key32": "4TnsvTkFFFmy6EeSijD3EZez932imB4HZtWeW3fH8GmjYpoDuNCCRFKxFnCqNrZGipU5HUkt9JDunX6mAtSMi8yE",
  "key33": "5nuePfr3mug2fMgrEdLFXxZurjHTio4VHbhX3UyTfmcqBFqHVgcSS3SzX7M2ESNHunbqEAv2xU8ZDJKVWCRPkwkd",
  "key34": "YwjQoqUH16hQNh8Ew7nMTF4FfwewTVRuEiZAnVdbprRUXoJ7hGFbZz9snLEGedRAtLz59aPLVkZt7XU95uMAvyR",
  "key35": "5AjdXd5V3YpXUhHYeXhpPdUs74YG7jCXxbDE643HyckNTpmTTU6ohuirSYubgXwmdFfLDqJv4wZ4xPFrSchYBAAF",
  "key36": "5kXMPAhCjbmUXhYXGFoSyEyxAYuHCYX2S1ydTaWKXmeaWvp169sei7LKVZDpD3BgH5GVtwHG7CAuvWcNNh4xdhAX"
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
