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
    "22HLr48Nzxo6BQPZsubS5iSHF37voKyuhRDKbxv3PyqSQ5Hg3E2nr5MKaeRvRx4jKAbzs9z8M7Pa8D3CgmPEX8o7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2B6EZe1ez9of1tSjgcvRBNwtYdixRENNsaFxSesRvMmqTfmctdrvE2bQeo64CyM9GAV9U1JjafDnbM25BZfVnW9m",
  "key1": "4M6aezU2bi4ZX9LfkBZMQAopiBk3W4XpugakJxtaWLMvD4epaP35fbpwkGVMzmXE1Xcr7t9rN2BpyFEcq2LVRGsG",
  "key2": "YBmjUgnCPcWsH6L4R8GWDeTtTrkwZSMC2s5g4D1UnW8xiPPE2GWspmcYNtBRQvFCsBK5DRpfrCfUL5oAAVat2dh",
  "key3": "tviqYGkWCbFMbH68snWXL4xQnS7J59Lm96Pg2ZEH8hSKwE5y1nhyj4gMvi1eneASwuXq4ENkakCaXuZn4DSTkbr",
  "key4": "2xmXr7N3Fs7GzJnEsXGxp22C6SgvJKtzQVuEWSvpqZEMwPAM31ymBAQnKBG4zRwc7pAV694pT39NVYx58BDu74vh",
  "key5": "3XaeWcmAzD68zkTY3Kv66gnhEQB1qa7Tu4FrA3NzvwKUUDMWDR4azSCJ16taz7P1zCGE5xiw8JfRmyvTs7mpyazz",
  "key6": "3jWMCSh5StzAaonffVJytmjUXpr2DmGa9kMTtbznRfqhYE5dtwpozAQQR72DweC1p4nTFiMt2icyEzLCqzctWxnz",
  "key7": "ck9YcWup6W3Wcp4ZSyqyffraUt2hgVnUBkVtATrJyXSRy33a6AVXJ6Z6Y82VYNFxLCpubR1eQdHHwHQqpK8b867",
  "key8": "4ZVRwhx56yizAgwkNTBxKZP56Q7DhYaXqZvyvhvAu5PCoj43tFRKvwBpXViHG9d8QB2pnR91gTGHEw64RaEahFEA",
  "key9": "45ij7Eds5DwLyZoriKP7Wmm4Xuzc429fje9V6tYDBQH3UybHY2ASayBtkxEUdDXSSb6F2PGrq1mp1SqQbjFpUPJa",
  "key10": "3dktFYySQoju2scqVcRtrqPyqLhp6AjuKpYDMX51bEiB9cZP3Zgg7Xq41Cd2uRsFEe6SGb42We4EWivmyFutmgRL",
  "key11": "eyaMyYXniKWa1WBeTFr7Sv4UXVvzWDgyNqanZUsUWd5oSxb95b6uuoq5Ay98tTZm8ZyG2ZhpXtKyMhrA4KMtwu4",
  "key12": "45nzado5YqySpEPei5jCv8Z9n1dgkCVdjskEoqL3XqxP2YM4Xdwhd3VjaRiYx2BE7umygE3QuNVNNbjuKBpqAcdi",
  "key13": "3JrRaWmMFFa5F69eVSDkiMHmD9WYqbTtyFpUP9ZcTaJsjHyLnU2oBrs3ZUPS3vq5MM5YJtuTmyH4iW9mTRYNebLk",
  "key14": "44jRukTzQBwhS4St15XTUGHiBCzuXJKPgdmhqNChffMkcwHFoqFQiGSdyQyxH6rwLtSSSrKMQLLYS18VMxhjh9Sh",
  "key15": "3cRPPFEmFZkW2n3dRzWRthiwpP2iAc3k78gLM6Wz1Uss41tYKApJue4eMtedXEJSsxcPkiNX2NnzeWq8pRiNMJGE",
  "key16": "5JdxnX8eSDou4GaBeu6brcMgYo4CVAwyztc9pesotKLSqHjFEdBjnRb94EoAsaufb8E1R6ev8ncD4Tec9d2phj72",
  "key17": "2oKvti5xsBWAaKLmR2jweRVeCBdFFLFiWCBi26ZFrnMZTfCfaJyCWKTeefWW7RtmZPqcDGBPT2YBR8SNRQ6o6A4o",
  "key18": "3KcLn58XB955ykjK5XG75gdHFi6tSjwkMnNCxHoEqB1GLukNryphoUo4iXeiTHrVySNqz9UPCyo8LHB5ayNqDe6",
  "key19": "2LcSUUGxduGDmWSNgypqi25xmaCyCnsP3qm6GnCMeeZo2xFPJ8L5XZ1cpL3kQUen6rtANYqi8cqZLDwnKrYSARsm",
  "key20": "4LBDuRsNBwjtL84FPqFKrq6iVRNHMMPJorn1HAMFVuDfj23p3vSRc4iQL1brvgGCdWwo5RmVLHjaGqAFq6cDbYvS",
  "key21": "5dx2f2R6Un2swDgEzAdDHLy59WRQ2cG55GsStsHjuvgPYncRmJdAoNeDTnWkWYKQ9P56DFmEqwj3eV3tfCewK9ua",
  "key22": "2quCHyGLFBBRyb2CbPcScaovRQHDxDLki9upWvuE8FW6cVGfSDxZEHW2e8ZZNBn85YcXWQSvCvcg9asgPLzg6qBq",
  "key23": "QFMTzX6q7CuYphfMS5ffdkMMo4qvXzDhgdk8Fo6xc9enbAvk3XMyAhm1L3Z4JidvH52XeZ3sbofAQVNJL2BT76P",
  "key24": "3w3REa3fjNQdGETkYeFKLrnwytRtv6G5GDHZy5qmXirUbYgt9dN6TeauRnx3LzQhdLSSCv8D9uu25m7VBPfnbjT",
  "key25": "4DWe3oMRCHsPiQ9gLGsbJKUErETi5cy4Re8zZQmAtBBas47n8MrcXPheQgVQgysj5rV6txyGR5RjfUrXBtH2tG9i",
  "key26": "3QBSj5WM75cFe3r7RczJ49YsiM7mWQoPjAMVKnJJ8Yd8HQWydGvfiPeSoQc2LnR4iUYbJQgoHjMgTRnLpQdVSssh",
  "key27": "558LjqCKMyg1BSwFaqnR58X87rbuQZB6XMViRDH88B6t9Jn4ebCqMzUqgjXXcgn2fwLkPDhqhX2NJTPNgFpLdL9m",
  "key28": "5os6HBRLVCqWekaC8reYzbxmaMy5Dh9cTtE2nz3a1A86VkpGKA4bmVFGbWd6c9EdwRhrbmM8siSEnfPq1GxLM8f9",
  "key29": "5XnVoChxwYxuYiLUVbVDriv6kefR3u5vtwqNqLepEQwpGw4A8WJ7N92xQ71L28b6oVmt7cA71SJYf2mFFs6gVeZP",
  "key30": "4GSD5BqDar7CfY2EfmqekrQxP6Eixyasnko4Q64yMiqjNSa1VjX6n6fH74ZCdCAiqCST8eGntJghxW4LcB4zSmGV",
  "key31": "5LcmMtYc62qmhTYBjh29wMs75YbJ2ZhSZgz8nnG9u5T265KVcmbURdRBacJQs49jzCYrvAo6KGrFi6gnVXYyy9XS",
  "key32": "5Nm5LowAcPjaDie8SvZdwGoX4A1HEvpjmafe3JKeWeDZTE8UwGs8UW6Fmi33Y633g37YU944MEXDrSBNR3hAxAo5",
  "key33": "2bN2aLMQp9qXU6fPhp2kzi7A8LbZpPLeGoUH1ucThJxj1gqTMtKZWbT4D85TxwT1J8vtygZgd7n9g8YppbV8jzFP",
  "key34": "4PMMsF7jFAUGiH1qXY5boVKgcxo77r9FUBveQj7Bg3p4yyrQ3BbXFNc8Lj28r9ZFqyi1fc6SGtcYPYbeBcodY8iD",
  "key35": "4xdodcadHN7KStLTrwszxaa8iybxQ3mLaF2vjmuyFpm5cNz3op4SUzhNaq6kwGiSK1dBApY1A1BDT8yVsiPRErwP",
  "key36": "5MEF2ZHMWy4n3dxY88y1sdKgoaUpjoGBh8HfTQw5dKMSBuQeXwUDrJK7bmgRBjNU5LdueHaDURKWawodKDmNdWrj",
  "key37": "5NejnPdbjKgN4fJC7CXU7qHNKPHJCCzvGdxS8LqtC7f2gynMiB5JHBJ3SbiQRwQVd5tCQRh8ucVSFMARP8oRaRXK",
  "key38": "z6LrTTuuZBDRfduYdFZoyT97sP6V8VvfaDgAg4fDLBR2msYss7ZdSe6v3917KEPwEKSa7gm15896EcZwrnAMYnZ",
  "key39": "63htZ7RKuGrZKGReRgD1jGCLdj9oF6T2ZWhReJy13VNLebDTnDowe19EhJtVYdDfxtbimBF7Lw9HuXaDH9rj1sAi",
  "key40": "55zahCjr2yqwEVGgzSeo6d4uiidjTC1R9PtGVftuyhx8uPaK6p22cNUQ5X7ww4pV1QuA7EqaTz4UAV6LVpeEWeGZ",
  "key41": "WMPDFk6mGuHG5drbw5mNTjmpKNsc6f7FpiTS5aUV7wHSUvrCDumRuPnz6z774tMJK3Bz8QyysAkpoEfSszDS5B7",
  "key42": "36oG1Xv3msMEvUrMZsVicBc8yi8u3xdqTKbP7j5nMSz3363ZF1B4AfMD4C8NYDokDNpErnRasfvY5rvm644c6sDt",
  "key43": "38cQZvrt6eQuRRKQzzF4PH1xCmPrfUydmg52RjwoXHuWFs24WimNXcypGviX52vek9BqzFhbebH66x7dXcJ6uV8w"
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
