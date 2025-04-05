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
    "2aCT2iQrexg2kj8QNc7dfuKxJnDoXvd1zoPAz9kg2de2HYdCrK6AnSfJRs6VbLGi3zVEoLkm7KDzkXwNeBntwXrH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fc68fSby3HVbLcLcYwndUNiNeMLNC37N4L2bzBLL4M8YF4HzriTx6zTT7MLxhzUN8t5Ec9usmYJZJk9pqq5WG4f",
  "key1": "3pGYgy8FVobYuUgBB8Dtf1uwdu8CD8cc29Rj4BSZbZmMmuebjj9ZuU3kwAiSiWmdF84ccedg1U8gFkJ4jP6rf7rJ",
  "key2": "hYiKnARRvE7BKmqwWsrxpfyVVokLzifzLLkZGLkqzHvB17WwbcfZCxyzgG6TTD5hEhTPnRXTNX2W63KGk5vo5fH",
  "key3": "3ofn5EY56YATn7wsAcJ9an5i5ZcXU6EyqSmEJgecH1uA93eRFxtD4ofm74QWgRucCZEGzQmGNkc7ozebZhxBPSGz",
  "key4": "33Z9xpEHzGjfem8PJwNQ3w913K22F6d7RcAuc5ASymUXYhNbkfWekoCRZAK1N6eDY2WALZvYLEFmz153oaq3Hcv1",
  "key5": "4CFsnZbRMgvbvh2HxSiaGAf7HWM8YhqmMcZkNyVAqqL6Su7imjLJ7isaUQNNdjC4fTG8kbvXLTV3zFPFJZJAMhyq",
  "key6": "2HCNYPH2Q4LpAU5CSL17w77pKoDeBW5TsPeJ22NjShcQvRgM7cTFHmoB6wKkFM2hLpjT9XtNdyeYYhfsbtVEQpNx",
  "key7": "K1FHiRg4BK8gbGXgQdwGVeiRQ8WrwyU55ivNryiioDKL1ipAMfNT7ErvAVDCdxt4X96W3rxVMR7dg5wM1W6SgXK",
  "key8": "2LW6XnPe6MNMrJNq3PibSce1aWnWjsvzVrivAA9Gd1idbyzbtDcE9MrqkLmFE6J1XN4VPCQAR7hJEqZ61AUZz8Rj",
  "key9": "5WCFUz5r2coZYUFCjQpnvKuAWwmc1mXFKyrxo5WhL3vb1B31JpjVq2tbFuHV3SA2kZ253T5vCYGwgisKhGUXZD4",
  "key10": "3rLAZHSGFYP9eSeftMwx7jc9kra4RkMwXtde3Ywfnqn9QKoKVjJpQ3TdggaeyDBpdTEFEupBccNBvNHk1Ym3U6V3",
  "key11": "2QE9vnE3uAEYbTLa2VxfWdRYdNqmsGkRGacHQtwFEH8Hh8Frkk5VtWq2vCXPW3Sb5qfogMjqGVF7Lze1HENjXAm3",
  "key12": "w9modWxbxmqEPEhMC2AbxfxqV7kPmjm4FTzGLvQW8BfCRk1cdWEPEHU3N2CwUKiffRkKcbAxhSg7VorD2qGfL2x",
  "key13": "3mgsKG269uS3KEUqFu96cwiom7yi3eMrrxZuMn2NYwNtrosEnPvYGCaf8qLDhy9MVXSpu1KBYcWbQgNhS51soLF6",
  "key14": "5HnZdMiav4T7BDFcQ8cT1H62jKaQLEAV2GuQiyyMHmfwcvzmvagrYSjamoCHjpMXhMvBMAhiQCPRuqr41DJ2aDJA",
  "key15": "5KTG3gbbcRbwYkLck6cGLji3CAUhR1ScvBmcEaGozNkxfKaVtdSTaqEFYio44Pd64cNpozg7EghXZ7cNW2gUCwtc",
  "key16": "25PHQ5ghJgovAjjnscU2BN1XsJy5Sy2f4NiA9JdFFDVdMLMsy7uiJJHEepYy4rW89gWQmCPu5poCHACoowfxrxBL",
  "key17": "5551V9TVN3gGP1DedcNXsQJkhKatoYhcGsTqgGRYBwxccAv22nLpy2AhLc6kMBJzUxb8qpEaCqsai6RG1hVaL4X9",
  "key18": "5e94aWvcTsBkUm32dNmsSsYKv9p8TXdmrm1J1sKnpU7rgn27YgJa2wS65axttpdh3cf9zoRqerRUGfGC64hfvfa5",
  "key19": "2PMhTm4EHUyrQ5kxu7Umus4q4SYUJMcsUMWdRYaVLmQdVKyxxXxUQMcYcjwHhq52Kai2n4hMpygNgwrYmkDmjAJf",
  "key20": "3w9kBEwiYLbRWt94cbyjqgvWJmViWiRxZgHfPQmyUFirZpKEE1jk5bbxdNPa2Xu6Sw8gSBimpoXQbuCFGi7aCP8h",
  "key21": "2DP5f7ZsdkKZGkuTXtbipmfNweNcdPhPr5Pf7FN7DTY7bGDVvdbqyVa9Aicm1wkcuwczqZ48bxUrrvbQsAgXvPLa",
  "key22": "33HSV9EWb8TvGuYsjSt4jBVwuC5HmViksuwz91aoVQTEHUGy25QZEgA8VrdtWX7tFkEvWFxeUYzi5wCKFm2kUGyM",
  "key23": "2YDc1BXwsM5AJ17DBVe8xPXcqk2Nef6Q9rmAaH7cn84WhNmdCes9bhrsPjjjLm42GqkoFqPu1hbosYgiQYTM9M6E",
  "key24": "3W8Mmg3SijJVJd4g8ETtyWLbL3kUiaUR67KW1fWsFfWiF43trJGiFRTk8oFeUTe3BXC9vcchBB3ARjPpVjfFxCz3",
  "key25": "3kCP3gJADg5rSEvVDjcgXWkbDxxQMM7xkxxz3qzdREbLeEUr8nxQUFkCKbtZdzxsJAcnKYGSs35GmkaGCPrjHCm2",
  "key26": "4BCYVGAyhxyDJteSqKEA7rBRH5dSvPVmPwVBtemLMKkETwbicLYVA1gK1ECeBYwHbBVd7J88sveP6QAw6Hgn2F8a",
  "key27": "6D7qnoHRR3za8XEPFkdZbs9ntSvvNmb4SyfdxDstyZ59BavUJ81ZG4ohJDPsa3g1Px5PVWQzhrnKGwcmr4B2qkB",
  "key28": "5Abx4RRa44tHK8nbn4NLQiLUUgjz7FWde2z8iu7rQdN8cN1MgGo1mK872sakK9UiBfhrA5eZMbKag8VfU8UC7ivU",
  "key29": "3aGdYkQYFTQEEupicjzk3Fez4zhgXRacypnfXkkrF1gsNw8bEQNHymp9AFiTi4a8SgBC7wHgsMX1xeS7deegco12",
  "key30": "U2Ftto4Ktyry9vRTHj9BUgUvB2UDhSxnxTpwtCJ6upYnCoFX8ga6wb9Q9VPXtSHWWRTND6CJL9W7hjHuwP3x2Z7",
  "key31": "5tkPX8X7qtxpzPHjaKVGHJ4bXr2j8BaKVvNsMLpRrVziKiuFF2LZAVoxUZyFFkPuM4wiobKFpLVyXgBwJBqfJGKT",
  "key32": "asMnvSm9fp8W1VujoME3UXNqDjN1vCeVux2BKHkoyzfhPzA4brh2PaaKqVx4FP9RoTn6Aia3mHNMbF2NDNzW4fM",
  "key33": "3iRzEhcnRuwrx2J3EK3dJMPjpmZq2SWPTrzz6DXWtoZFdA4eW1MA6wAa7wMwW1FX7AAm3mNWxV6CKYrmmQJQrHND",
  "key34": "3V5tpKNTfQAWmJ4Z9knERPFY2EcNwVXHWLnX8uMcDq7fV8PbfEMHayVFYeE3kdKbbEBDri2PtKQKnwF5r5NZedL5",
  "key35": "2z7WyeJJ5YV3NQ7q9DKtweNUvdhyXFks86yANZ3Lpij24iY9nQBoDE3ZcK2wtyQW2BgMHJy3sDbjg7bcbuAq2PT1"
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
