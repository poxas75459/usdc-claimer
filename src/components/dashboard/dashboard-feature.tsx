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
    "4YGj9SKbcSA8FrXeMmiP2WMFQzLg7x4SuRVuCcV1UzaB7RSdXPBQA3hya1jdFytSVBJF2Lnp17kg84qW5uYdBrwH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51khzGZg8qcBgjcnrkwSe7WqHAeNooyv9Wd5SzU4ZX7cY7P6dPzEkXnvUgzi5kHFdUpr9Ry9x312XBDoYhYCXY8h",
  "key1": "QUxq33C2wX5MdUmbCCvoFUgXghMFiFBbhuhmRFNi32wmGhLP568EJ1GwhzMfTcX1kiuo6uPXUg3Et3PEvfj12Uo",
  "key2": "497DRXUrC7B2Ztaejct6S77LmFyaLwzsnVxxGoQDQT13waVAekdDp3o142LiMgH6UjskXjGCLNJKEiiNtPqp1XKz",
  "key3": "4gSb5Y5EJFCgcRpi6EJX742GZEGdefTJ3jdsJGGmzUkcMUy235EdXgawQ9iV74ai4zG89vZLGPuxpToLfcXcBrNP",
  "key4": "4oqQzokKDuhYTXqWhbSVo15yAfaDuaFQDtpwTkai5jPcD62XxTEyPxuF1Cs6WAqdS3zURf3QtDTrSbWB2HwK96tA",
  "key5": "3yT7uvHfjhFuvaYUAH8CXX79k2SCTy3dLSE3hnYQP88zs6KRgAKpucEX3nEoLQvpRewuMLmJqQiEdgk5WbBKodiV",
  "key6": "4JSS5L9YYnriZ79aJH9uGWG67eGd63xhjDaGg1VE9EUpkPu8mNaP7kmL5P3EtrYTcrreHD2NNM4Ucoj2ukR5ZK78",
  "key7": "3vDo4Pvn1mhuqDBRiNHD7jfNxqHfgwAhBGDM5EJubTaGv3kEiboevWA1t33QTFfiHDYqzevqp3vsSNEMffp5AhuQ",
  "key8": "3EguyzBvkXEtYaQvd2mUzJ7osDVFYWcnR8wmS8NXV7hWtEyWV3kf5i1R5pVQ2s6aBrGCvYdXSWnoqVXMtRzHJAFs",
  "key9": "3b1JtWPgqvhvJa4zgicBLk8a5nLGM5XHTkH9ndxtypMLhHsuavQ9WeobQQ74Vys2M6bd4Fri26YQQUWxvSQeApvV",
  "key10": "5q9kZYEv1n2SemmD4Wjt34UPS9vVSheHyiTaRapbneo5bipgSMA7F5tJHGSUAD3i9AeVEDbPEv1VuozVM6nn4LEY",
  "key11": "55vD7brgtR4ENr8LMcCVfCKfpQs5mDKv77JUWF5kh4ifPKNBGFw45LvZhQWyKyCeCy7iR1F8p8jFPYBp3MSaAFZe",
  "key12": "36tXawhohdnT4t3sAJ6B86anCriZQLA5K9D7VdeeCRhHidiiZZUENbQJdC8F378u2ubNTsSyKLE5RXWMzAsEMreR",
  "key13": "LK7KKyptufArNEsjkRaY89rasJBSe2BXPheQyvdSML8LwcosXwrP2kjHoUzEyPDCtQSkLg7uVPnqhm78Wfg59gg",
  "key14": "2w8NknfgnDhXpEZ7Q8K5QwoX9dLVj5Fc8DqCi2bCcPewzYGcFsHAwwHPwHmwtSVcocVJUaAfhoMWbBmiaCzPvXyu",
  "key15": "5293wGHiNm4hW3P1mgRq4zwYmuS54q8ntE5WaB7qsKCsPKMgv1sZkVb3eqKoi6xcfMhALXzHKUJqJqUUfXGXgxm6",
  "key16": "3tP1icZD1JVFUncy3dmC42xsUgwu1UmsAkay2wqVqARxpqz1BQuRDUV9MF15VNkGXETd5E6x1QoXpgCidMUu7EZx",
  "key17": "5VYL45PuZJCjvSZEZzJ9SeTfHvHPfubAHjzMxa6RNAEP9esqVaqNNc4kAqPfz5fhuuxCg9PYUrfkyr3EQZMcbKN",
  "key18": "4qduyw1WaTvyUTZcNhtQ6CsUvKfLrwSxjRK4eRZ8LGvvahZkPxPFF1JEhmjAkwDDy3k4vs5Vsk8Koh2kDwiX7A9Z",
  "key19": "A3JWRSiWv63YSanJxR12nYQ5NEg3ujnpgLexFXvs2Cs5GUv7vKH4Gh8j5GkdKzmDxkxgXMh71Utzngp3hYdyESu",
  "key20": "3fbj81wr5chRLkeTgTYvtMHEdH6b8duRwh8kvWctiTaFeJ7TCnniU37rzmRnJFCDBfUHZjaKKMwzuYhA9ay1Su62",
  "key21": "5pt2dV5A8LCgLtDVrMRyWMX7azVrd4A1NsXw1k3ET9aS3thZVKwhjtg7zVKyxZbiQCvj15nHG6q2bvdYFWgMgtfX",
  "key22": "55aVW4AtEzNRLUoYHZhitSRMXdyXpgwTCbmVKQH8uAwmddjGjHq8pc8UWjeByUCezsqQp7ZgGfgsXtgAXcBSLLWM",
  "key23": "2446eoE9RWksX4TBSQN8gnDUbBx2SX1PfEYJA1eKsgnS6D68HYeFueVc8JWBJgDAPbCigbh1UtUKNGKRZir2Uy6P",
  "key24": "uCA58UdUkDU1xWGFL9axLvvQs3bVqLDXi7v9sKGstVghDrPZWSJbZiV9DP44m7q8rWSdviGA87ZHYKXzUzTLrG6",
  "key25": "PLEfThGEVoo983Edx3qc7JmBDzWLqXcJa1sCVbzLPvJWnNW1LbS5hCby588Mri81nuFMaJroLEyvXf47QRX4M9P",
  "key26": "29bPYGWGVz7UjVzfzjxCDVBU9gDySNZodJS8kBZvxhV6jr86JZK4XFKuKahRq78NufoBEpmWRjb212EFHdqzh3Un",
  "key27": "559Ws8cy5m3LnLAXPj8JkQHE7ExdQ6wXTxtEod82zp3t8XeSyUc77zh7roh2iPkjrCzNPDzfDH2jEmceLNSbbyAK",
  "key28": "3NGfn5LHTT8LkjLFq1Srn4EaoAgZuLYZyaoWw93UQ3fS4YQ6KNQAyqhwF2x6Scpg6oPoZCfUW8XZ2zcF54WciCmi",
  "key29": "488kpJjE7ES9usu5vLzs2tLqJz18GfRM5fdj5MK3dq3YRPv7MSpxkwCjqWFRhR3yvQh5YaCs5yjgAWek5ESY61Vk",
  "key30": "2BfaZbpn4T6FZFNwpmPhPypN67TX8dNkWczoLKBDdiiaLq2AkcvYkmRpa8sDPYcem43qWKHU2FYAavWFs77mXUki",
  "key31": "65LTqtEVNHfGaQ3z19HjRG45RJDBpsXrPXZuEQNNw2jBDpAw1o2Q2iW2goeL5QE7UW2ok5vQiWwZCSV62vUQdN6f",
  "key32": "481SFQT8ioYt2tLJgYkyRzXsWwTbN8bYST7iqU3qsSqCz56Kt4oU2EuwLhJ9Ax4xjpzjrKQGTr8ZgeGyaQZUVWBX",
  "key33": "3dpEdcxtRMj52WQQvL9zkcPHNrT8thVVg4YXuw47rjjhFwVvP1sZSatSgaAmA12rKYJhU7L7DcXvgNqKGDX9jfKN",
  "key34": "kAzzwokkjxE8kDbiMg596xzQaj8t57TKFBjtPj7RbJVzcgx2R1RS4uWoxUmGoAG2Wx3Y7cFoDqLqqAiocAAv7kP",
  "key35": "QAV3P8xU4MDiVFToQ7z8qmYYs1aZcYN1FFBN26EKsoKS5dGJcdDod3GfF6EpjR5Ss9T8tQgC5d4GVTczvLDKCNY",
  "key36": "2F9aLH51DeMbfGJbihPW64VXscYbNG8ZrsimUkawqMdAVuA3HFeJAchoLwn5rx8tM69fMsSWuxCcjNrjxgbMMJAJ",
  "key37": "31DJPL5Ka8b7hiPsv76rzcekHuiAsfg12rWhkUE3sg8RgaDj56StywdJ3x8mjsi4sPSErqcippVXYQWmQSYeVUVC",
  "key38": "2zUTWGY8uPp5xnqMSZGzQ2donhTo4tXLCYnQYheCmS3bdkHPvWhnrXWMebSF4Gqi2gRoiKqbRWWWxdTeYW3HPcw6",
  "key39": "4hBJQoh3UPJg1kn4FkoNmuCc8JvMhSm9kts1RQMuTDCQYWKFxsE2XKG7pMFM5WsR6jW6RGh4pEDJ7M5zQEops5uK",
  "key40": "3zS34FtspYdtaCMdyNA5RDKWuxCM9U5tWqBqYRoRjh2oJD7Ybus92cLLsJzN1v7s7SwPihcDRRVznhMFQmnAuoQY",
  "key41": "3gMfQdnoZp8Pe3dGZCAeHT4goFaJ8yJxgE22iyFaPB9ohDMXcFKmsxaFGQ4SnhRwdMka8rSb8LNufuuPeEk3Ym7Z",
  "key42": "AhJejTzYqMYk2EuNQ99J7zD4VHd5pkkN9BfTdrWfNi4WTSBsWXbQFqMDdAn7Vwm1aoWGcY9anrcXBjd5UCCTmBy",
  "key43": "2NfiW9b1fpvVXCzQNa7g9CePmCYF71zLsx35NKsxc5ZeetRG2VL7hXVSraQLa7ELYhM4zw7MNVCQZRnPbZf4WU6E",
  "key44": "5NFzUj7q95KMjUTFHY1NwR8ABEFRbbY96L4sxuX1sFXWtz9zYByuLVgBovYrrQ58NorygcLCaEu2GSutytre7CXf",
  "key45": "2LQNi18a6MoHSX1f8pmDYU4yAqSDY8sBufv9shPzy4XSTb9w7hNzerkiZXBGwZA3fWJX8b9BWZhd9YhUFxKavooV",
  "key46": "5Z7EnJXGFV3RgvTAndw7X44nupGfQxLfqp1mbbPgU5dqfYGLhPngCBkduC1Qv11iZkQoNdjqpuLvYaUTvEqoAorg",
  "key47": "5Lg2mWtfYa3CQxAnKjbkgBY7s6Ra9SqmkTMmjYf2yfbbwsKHEqUR6wHU489DJcshnGtL6NuYU7Tjggbw9sHyfXqW",
  "key48": "63yvGomY8rVGcfCXkMNfn6Zuy8SM87yK3eDV9daxYekSZv2487wxKq5GZfnkhxrPzh1TVMf2fqS1aDWLykkCSnV7"
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
