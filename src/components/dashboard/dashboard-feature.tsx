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
    "32TGeGbPzkCszASfUkGnGjRP19LgHCAd1JXZddDyztz9uEuswicQA48wLEsBtRUDnfcAjNKuBc14dNaZe8xjJin2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "v1N9bqD5Cb3JwysbCsHj4MtYZZQdsrob3PNjySYeVJXU2LWtYXfpfEwoHjw6iQAjBrJQdwU8XDtSUvdRKZykqb7",
  "key1": "45RRVtSjFct9yX8nLFqjTeixNVEnWFjTNXX7SfW3HgUzP5yAM1DGKffEixCRX3Yq3a2uun2UnXg16SifZeySUftC",
  "key2": "5YH45EVmYdRRyHzPntQpycJPrLFMr9ejoUofbPBt9gCMs5MdUeXzg2pZTLThb2hWQeyGd7uGmgYR3peWCjwoy4Cb",
  "key3": "4Ls8EPtKL4GkdgVnP9fapc736bywcmb39pq6qsFoBJnmS1CxHBuQQS519eu5ctvHkhPNQ4jwSRNxypJ9nZCbw7un",
  "key4": "4MoZufgBDH4MttdyeF4yNCBKugapNyehjSjLbFSpFmeVFpX2Sc2mJu5sSop6aEiBpy7oZyD5VZKshJC6h5yVqgXk",
  "key5": "3Vr6X9tBNSK5hown9mwZ7HWhMQkeTM6JAkTLpns63g9mCcVidAXCQrYjmvj44pmpJdNzDoCkpzGaTyjXJj6o5kxF",
  "key6": "5TojQT3Ui3X5JAR1BHstfsYeyi6qogDTn21BG8itU1LiRYiYWSnCEXiPwhhpazTonMg7Vxki5GgHYgZ5fguMgkmS",
  "key7": "5eXAfTiy6Q4Zf5pYsDw2VgRRbJjKaujgsoi7cCbtQtSKRW2n6cc9ELwZK5e2T52sn6VVkuJwCHtPmrFuU7KdpAUd",
  "key8": "3cpE9N6MHeWGPot8FdRtXmf2YHdRJQ2btxVj9ALZcXLPknDGHUvor6CHnZEmPPaoKvExMRCkeEYpcsSVzKmN3Du2",
  "key9": "2MwaNXb8p3RqheZbjNcCGF2HGTKjmDdsd7js2SqBoykzAqP5wXzywEhfd5DnnrBJoDrxm9HDEEGB3ATdVtqqTrEM",
  "key10": "4XyBR6Uf84MmXsDzuCs2KPp2GHq9idTfc26EwfbmPoWJnUnMBiavmabL77zAfr9pNH9zVwuNQ3hfXJmpDDZzqdee",
  "key11": "5HvH1ryxbtZTj8muq9LXRm5h7utbNjear29cBGabK9AM1tWr7p1sgLXvxKNUBDwoPZaEgcxhWF52NDTryYD3CPMz",
  "key12": "3RZw4SxfzEdMYaTtMGA2tryoeLLfTnBWcLGjmcgYo6VqEdYTCamMXTgi1mvLbbcRB7sT2jNpcNM1vYj7hnBsjJBW",
  "key13": "4aUJYJweynruF4NvvDdgjXGxwCQXNPn9JR6jzA1ynMPAZ5iBT4vU1v3FwdsHuX9wT7F5LztxXcDFb7DdnDqxitUF",
  "key14": "5Hof3L7vPvRmfoDCGmF6MPoBFUgaeH4bSeKX7P1AyppUWkyScn46xNs1YT2BfwdVz2W93Z9qaQr5q1EgxoTu8SBe",
  "key15": "3FTBbPtxJeNdsDKWVQsjrYeJrjVjXtV6DP7mih64PFivJgDAwDS8AfNzGgsCPm7zitrqH9dkgRFYwGeS3vZgnqT5",
  "key16": "2iDG1cr96KzMH3gtJ1LDvWGosLhBnfHZDPAAtapvWbtVRhXBpxHTDLSZntRdMMMWBtdgDR6towgv2X6g2TuGr4AA",
  "key17": "4jxF25Zemku8xYCXg1fSxwhzBaTMmgnWQxvHo9EVG5iGW1CGPE7XXVpk4vEgKDCdu1t7pXbiUpeHY3HTzrgq4J2z",
  "key18": "41voSN7qNotxSVMAxEKSiTvna5ttCQFNcVV92oCz11dcNQPMxTgMREbyCkRfv2uhPXTroCavnnQsBwacC4MkSig2",
  "key19": "apYrvroQ4TeuwzwxqMqrnuRJN9zpvX2Knp6Qnc8mdwD6cwXbm5M37jkjpRJkKRkjnNyGg1B87zS5NUTeC6wh4Du",
  "key20": "5KzLYbCzjHnq5JtemR2D1LBuoN1j8BP19avMPwpKhPTSKbj8Zgc4oKVcNkuDA8e9bie4RjWTJ2koZ9cpMoW6Doyg",
  "key21": "4k8FrytgyAFKxhQYTRmw8NSZTKrv1pkJLHFqsJvWRouw33ibUWEPJh2omRCHCp6hdJsbaw1jHEprZc6QNLMR7Sq1",
  "key22": "bE5sDKUpWMWAJKr94sG2DneDFwVXJn6VK9Vk1SdzqJfUpngjYCDM89TDbtd8WhAn6UrdxKH5xnXHUJjW3UfC586",
  "key23": "HCEbH4vGeA2xdY3fvPTUAgtWwpu1nkSBefRLgfVpwvKav7PEgo3A5Luw5oxMSbfyzxWMbzc5xscyWcUFbGZeUvH",
  "key24": "4c2bJfhtYKPuVekZM3drk4JGcNY4jD4efLwNemPxioqLt4au8suMLFdJABdwuCQBDoUf1Ps7eirNyrFt8efQKF2o",
  "key25": "4fSKDfdggLBaarZeFhgU4RfEcdEYgs8Z4frRGj66Tp5kj3V6bfG4t34eUFWNrPhomBrrZEVZ6rcqA45Rtp6uaTaK",
  "key26": "4tK9Q6Xz6PMWTVANbNPgfUr1jQtxTJZsCX2cmu9B1Ni7JxMTN5ufHGNZKHxUNiQLnGBtzBNvwQurrSw92DRMrZX4",
  "key27": "466RxXXSSachBXzyjF5T2Yxtyh8v4ud2Yg1TvWREqCh1GXE7uXJ6fnjw2Kj7G1BNPHwM3bAyV45ccV2Vf4oSrnSF",
  "key28": "3xMBV86jU6PapP5pNdUhdvGZGZKLaABLtqgSLRwofTiuXMCT5CqVA9fXxgZtGFsoqcvDqH4QLUSdNAX672cicFda",
  "key29": "2vYAeCtk2qA2JFZAmvTjLX6R5VKL4jwrEjhzF9KsNVP3ApRbADzdSvsQjSoc5yS8spPnyJKEK2XZ56LoNVBmEHcU",
  "key30": "4JzwXbJVe74hS65m8hui6ZVuzxMLxLqKokEZgFeEfntd3cUiGf7XB9khV56C4JDbJnrEJCookb4Tw8srtTfHDxPz",
  "key31": "2GYoH78dPUHVMe8miGrzRj3sty39tcGm9KG7Q4ABPuu86RFgEbXwVshjmqXPfBwKKKbsf5tFAhEGHAdq3H9rwcwu",
  "key32": "3aStEuFpriQK3yFC27zfekqJ6fUq91g7QeMU7w8Gt33VBZRUt4NgdiJ38aMRRVWBSHNuCrSEQL2GE539joQsv6Lt"
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
