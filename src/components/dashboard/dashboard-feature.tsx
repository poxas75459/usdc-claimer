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
    "4G4adcEKo62wWzzMnCGhRT6Xv56GRWt7Y7vh5myYPKzzZXF2d1j6uTG1GMUKSvbWQbzvjzSVL9VCex8xMYW1gp9o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4u6524iu37Axw12hS8Um8X73o5G11gM2ciVgUWdPzmH9wPRDXN8xF54RsTeTwJ3t3vbUXGDtfgEyRDeDNdnoxiEo",
  "key1": "5AA8jm7EyyYmWu61Q2HWhCoBn95NXQenroWV5kbpZHftVpnn1swCB466EtQ1xHqzMvKtYUg8bXarxcpEAqua2G5J",
  "key2": "2ZgPDzaodaMLci5P5pfqFvhuvcto1UsCDWw4QwTAL5dDUBdRx7W71Js82hBrGtppcy3KP8fMSfxc3ByPBYRudiGP",
  "key3": "NofiMQZkbJsbQeB9YkoG5kXq4f8xeDgk7hUo5gtmkTMhTGVV6k1pZ5g4aaYpAvnzXCSBy1Xy5uMMqZm85bz8EAh",
  "key4": "2dzC5iCKyNSAs1vXB6mnRFqmVZwWkdu2kLAyo73EpWCZTA1rTGqut2XKwcZXyzotVM3h7vDsjNFHvfHGz1HJmBCg",
  "key5": "25uEA1Du3EqH5PFraUyCvE384YTs2zfPmkYpxKL4aus4DBiv4bqik36ufDCWmH5TNrgg8oyqM1Y3zmVCA2iP6EDW",
  "key6": "2mnpZUaGAywcGyCmuzeMWrPLR9aHcaKfJkbhahbgd9R8pkRjb8bLwuDkhRYofqiwjTxC4pdSYJFT5zEHZgNpZzMR",
  "key7": "3XHxYjL7sfozWWWETUWn7CgV5Rtwjjiv5mxhV2ouk3YrRUmgEJngD9ZN11W5XRd5XZ2SJCqE9pwxmeZ7zsTG3T2N",
  "key8": "2VMQspRs9E248rsEnMAJqZKnqgsMaw4Zc6RXEQkfwRquobKN3MDZvjJshqV7jymJ3NJ5SYZ3kqTnZvskgLzNTWuC",
  "key9": "2qY1P3MKZAZtp4G3zpvXMHuUPGMPBxrae9awQqurckS2nMdzRgqAkRmpw5CjAUN8MV7DmmkBQZRoeiPFEDigKXsC",
  "key10": "3x38W2mRtn6QotK9ZjBNRDFPJ3bWwfvTQhxdHHpDyTVDT9YJp3Dj132X2CZHMMJR5Y6ctULS5WUkVTGUoa1Q4TDq",
  "key11": "5Zx7HxTxYt53RvDTmNS6yAT54Xn6XbX1MeB6uV9tgctmdzC9BA3WzcVH8p6T9eWvRygDxdhLSsCu78KGvb7Vgr25",
  "key12": "3GSo9McffejYhV6V232Ez5osb9PUZwVEq3mLXMmsPda1pKekbR6ZoBpkrwcyeZN8kgfLyyXvErNjJh9tR7aWbjy7",
  "key13": "2oW8MVMCx7fevGStn96qeAWSmyrnTmEW6xx9J8iijLqQPMkVde8tpqFju7zutWcGiJr5CmUVyBr1YdTf2pXmSuP4",
  "key14": "3UXxWJbZ6McvSwnyEw8W751osaNhCQdcrJcRNhhUw6g48zv3hHjb7pBAoTdYyZHGGPGko8FUyV4ZFqiwg2KQevNW",
  "key15": "4qWYQc3rhCvsBs6Lqyv2SShBBJWpJExjs15avBjAskSQZsj9Jzv6KeuE89J9W3eAHNL2TDU5B2GGnymzJUoNHrK9",
  "key16": "2zWLYyjsepsUY9iZG5Qb8HNPuv2grSB4dzKYc6irnSHhus8J5nFFgTss3iC55ZPBVcUdmnAsVtkDA5xAgvbAne7X",
  "key17": "7c7M2dUPfjcYPXQRXAhKvABtwdwizPEX2Ai6Zmh2XgK4aemuzzfEXWc92cBbxkm99SanjACtQ83bj3nST1cwBmF",
  "key18": "oNXvrhvmYvfLx83Fwr6vudUBHAXMYD3f7hJgsRJYL157VPijerGGQArXHp3fkjgiWG8ZXpnnEMdTUKZyTQVdaXu",
  "key19": "4fMnVMQPvQCx7U6HEw7bmQ2CkC5LbXsiSavUUTdpLMECfjMDj6sEH9NhbQNZrUpUHVe9DHU3iyKagUVzQzapNhU7",
  "key20": "3Nor1sFKhGSRs2yiZUxcJa2qZJP3dqfqnpFuvA9iZr9D8viYuRxabNyWywX4yhN8Vqr4ne6KM5qL47kAyFj3mqnZ",
  "key21": "33Xm1JeWxdNonmh7vah74sU6MUupSsuezZTsZJCHbw6rDaXtm56PocXeWybcBFFgSKh9cKqNC3Z2qyd47gFbcnE",
  "key22": "2WYT8C8hZuXN69fc4h6ZLXinkwtH36xerbkLm3ziD519M9oZB1qjHSmmSwZ76yzGdvfsq1aKrKXUeecGT6EeC9T3",
  "key23": "LwEaGkgemBAWFzHefeJTQr6Z9N8BdkUCjM5ePRomFYt9AjEFrUA9yzeySce5zfiYEd59qijMEzyEFgVxccDY1Hi",
  "key24": "yTQpFno8z6ifc7e7MYA5qJm5LSKx1zUc8JCDriobtMhhkMNT99tQU1Ji4ndY5DkEtJRt3Z2Myvm5rnT8kYgafin",
  "key25": "3XZvGyBrchwt58gBmXTVSoc1YDECLVbCS3HArS8ptEWBa58MyDxs4wYAhEDPNmSKFg5ug6va9FF9aHrBXkNq9YSE",
  "key26": "4FtfE4bW2w9WrP2QFfFyiGvKdZaBYqsNDD4maSSCF58HwY1CvXfoiEhd8h68JeEUUdqWKP7Tpm1zRh5rud1XZGZo",
  "key27": "3Qjr2eBJqS2cq9cN6XRXFNni3vSdAQpFt8tsA65NjFcM9CfzEqEedFu2BFKsYzLFucR3G3V4WVopi9KHTfEdoh4g",
  "key28": "5MnTjqgpvdXppxakEctyDUjouPH6jeYQwCNXg7SecQjKNJSNRpu7cqvwAoW24T2k4QX1vaewFTjz8p1wjhFNEaFz",
  "key29": "3Xyxfh1k9c31SynPRxBYJFzRPt6GgJbidQNzrN9N2g7STnmkKYLPT387RicbKHa7L3baFuGnzNf2E4tM3aKEs1r1",
  "key30": "4yvWiAQPCg3CJdhAZkbGZY9i4rL2cmcbqmPsY9ffbwSe6vEv6tqxMvL3SfDNbDhR82FPZiN6jdad6GKnyv7E2L7Y",
  "key31": "KQKf6QUsLQLswmpbVfMKQfZgdJjAPxt7z9hemaNw9Ss1DRJEnBvniDE5dAdiBgPTcoLfVNAXQ2XBCN9vePyUCrA",
  "key32": "4CP6gH9skZ8aSTywB4XBPSCeCMyg1NcW8dPvfNionMoqYsdCC7retfRDMFcn18sXwyqA6jPSbzrSc5DhCcqFXbc7",
  "key33": "2TSpvV81au6NqcqrzrqcuBJkSiJ33QcAJ1XCczWpGJNXmBPteFJnQPhikyMvBEh4kGvbHrhfPKHVTTEtfvNqZBsW"
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
