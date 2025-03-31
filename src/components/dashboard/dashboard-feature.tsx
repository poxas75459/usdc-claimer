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
    "3GbS8XqUVawKNmLqHZT8SDGCAMYg5ry1ukV9zGQCcTEzryTBwoJJ2iPTGWqKr7beL5dGPLBEFxV1S769b1ZX7Vu2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uVpFiCYEeP5mUq6nfyV2fdKd5PN3x3bc31Rx2ny5wPJy7mMDAR7HASco5RSSV6kUNAdpscdKXv2KyM6kBG7T6zG",
  "key1": "2QPXrZXRLxBZ52iytH8YazTfdVuPTPRXu68Z3W8jh3oxqxycq81k4Zvqpcz4JXeYRRY7aeMNNqUNyjXm4Me8zp8B",
  "key2": "1jENouqemTWEAMdJCTunLPJQmQwum8prN29e1u35qxGAS9ySoMQK3ofMawYNFhXi22AE6UU4XJTDQPVPyFsV5PG",
  "key3": "46p3Mb6QY6eheWbkE18drB4TMBiwtfDWAzNtcEmQZiWp5tRimbuVD7Kp9jDRq6qeMz4pGAA8vX9bYgCQytpVdPvi",
  "key4": "2WRtFos3RfVFen155nSJwLuENPAoyjfvKjbXPvDjHNZxtcEj1QWWpqjXpcPHjvhhNF4RpGmY7pFPPQwbXDroggWD",
  "key5": "vRRPMmN1miAKApN9wqvBLTbk7yCkphfNZgnGgFDXRqjA614FpXWgtZd6HeykFyaLYimdT86BfwPTFczQiJShTEY",
  "key6": "5DWyxZ4EWLnu98nUcqGVTBuvDg3DN6448vViLJaAVEdhn8ceAAwAusqcU6gQs8UrZiF3tEZLHQmvQHLKbmqnLTza",
  "key7": "5sojiBh5vLTxLqfwNxYEQ8EBund7KKSxQyTZUXHeZd8Tab1yYcpAj7J45xES8ADqh75rRm7d4kToZYB9oaf9VTrL",
  "key8": "56srhg5dKaemuYpYj4boJq4LfC8jPNwZeE2dP68KW4NDXyVRzv1GmRmXehYLsazMcZjgX66baMVPkxgunEJmsfHd",
  "key9": "KUAh38YzQXgAHVxo4jqM2bcP3F3dy8PFQRhd7PQzniJWBREzLmRcJQrKRnP8T3xeiV2yUYGM3AS6m5itEDSV8cr",
  "key10": "3L4zo5WsAvkZuGxyPN53GjpZQ11MTeWLVjx7QC5QRTjhtmUs41US4VPo43AS3SDSVRNYvaRFv22GTmj5xcfZqbaM",
  "key11": "66KSavhoCNUC33Y9xU78c7ogBfgjfo7feMvoCnxgPxj76iFFqvNpfFELYYnqjcEqJcUi9mJdh63E7Yz11Er2HX7r",
  "key12": "5tBQrGSDyUS8bCuktXojdMq92PNoSBwZHGUzyUP3xMTpmSp6ZtwKJDw7peU7MKbaVVqgjTTNkwgBdfnfaYz1T8fj",
  "key13": "2iycgrRdGrRX1LziqnATYqrNNRS7SByvEViMjHUU8G2G1NDNH1QZxxFoJq2EZ9uUWEKiExU4yePuL2h979a9aYcX",
  "key14": "5pzbTTK4NAW3QCEGGsFeJ7XGri65KG8djqD6PF3u258a6fbhyU7QjAJBpK26SyCXPsJNQxW77mdLi6pAJjVm2ewy",
  "key15": "5eASZgpjmLMcSV2jEYQnZ8YL7kA4NvNA51c8QKPVHNdqeDvGBGX9AyeNemgZ3okHyZaFE4xVWYCiGCSxVC2whxEV",
  "key16": "25pFMn5kEsvxpJTukkB9cMSdv9ED1a69BRx66W3o3KrR9Q8GiuuvkVaentPtNrdxcJLCWR6m6om9kCusZhSZPqRq",
  "key17": "2ZQ46XRJyrqnPzeQK5joDCT18As7UtLJ3VygjvocjbyXrhCL9pyr6voXpiLs7rmAki2rQweFMWhqiKQnozkuCHWz",
  "key18": "vxZLmeQhvPoEFmwZtocEVN9q9rUJjB2LHYHwtwv86dH2FA4RVaEhr1PLfJnzZuth4FCDPV8UBooARUXDwMZQEbW",
  "key19": "29Rkmrn7D4QZTBRsU4sC5v7vtxiwLCuwzSiD8WGS4iMALFFiSU4dVbMVpMDRMcJ2er2yQPmKfcEdiz23ChzLPeMw",
  "key20": "5P14q3NZZrNdMQrZo17wmb5Pca57GfWcDiTMKN1Xq6iS8VUvyHMhMiiEtKQEXpbrofG3YqzSer1eJVDRzKErJU5s",
  "key21": "Kfpupu7WyNSANNzb48Kq6tbZYPERChyAfygU7ovSQVTSwehzXb6pyT3Vbxe3SM1yySvygq543j4mJB2DVYb2yet",
  "key22": "4ruuZHg6A4M7Jrz3vimznNtPsCSb1fSGG52Q78nx2Rg2Ev6JeLiaSfjWhDkH5HhNjjN5KuSzzn7icDKQh11WUkwE",
  "key23": "2cJJ9zERRwfmnkTwgicytALhiFXXP5DEw79929HeCoAWfC8bmF7prPkypzkHABhqqTtSQxtm34F5gTmNr8TCazZ4",
  "key24": "dGm64Nr3HdGoHLdmZa1mnYCPfTMd1WoiK9CBUUVcs8HnRj6jFAdPHGX6uZ2Rzszm8XjJRdFoCMEp5JpKRyCACjc",
  "key25": "5qL5yDoebaTwXEy6VXjQhe5pceQLmikyAehy4MWEuZWqCfaQcUH6q2yZNCkLvHGdDdFDMA4gGCmkvAzKMipbvtim",
  "key26": "3CWU82AXkPUgwYLpCxfvzqcWnX4T5zMcmCBQuV7XkATLKmQfF9NUKCWv9Ho184fFtoAjwvJmnPCWJpkwGpqGr43o",
  "key27": "2xQcmq49fh4KR6b54a5fRk8ZciiSAFzXSvVjdY9orQb3mKAvtz13xiAFb2APa31thuwYPva4iDk82uH3Lr3FRgNo",
  "key28": "553QqcL27QchDQDnip4CFUH2gX57Z6ixFKy1PzxMhL3vyvd1ezrozfGHbFTr5PzWzEM4g9pUNyvSnBKtRXf78AiD",
  "key29": "4aVmWCUj5bKKtb8JbHrKSpDiPjSy8soaCRCVPPcZkmA4PbR1Dy3vtrH7jxSYCCCQdASaVBi6eoMQ3w73FEo7UBCM"
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
