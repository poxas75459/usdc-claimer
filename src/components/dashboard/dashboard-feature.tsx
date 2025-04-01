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
    "tbdosM7cP2WjepmGS4iFqymshRyDbMesoJnhcqPUjZrCBoum9VdtSXYPuUDhfstq5XQWzHedsUvv9QzuXscTrHm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SzVs3niayo3fHrSTLkwoWUNNyD13oXqnG5DiBbmKn4SwiD6RLyLS8NC6VjZhdB1PqFsWgcRiVsFEVYpaBLTcGN3",
  "key1": "2tpCL2Ts5CNVce9RRctBMSXvicYxtqnbJZ8PNLPqthRH1Q1mb5mi6HjYAhBcpEndCMRm3FASdWsEjPbE3HdkDB9j",
  "key2": "QdMpAoDupAWuUf686HarVUyWoBCWK73dR7rmi9eUNkqhZxyjT46QRJbMTmEJ8N2kjDkFmPpUT2sUS8YNK1S3SuJ",
  "key3": "9uPvwGax8HfeDvYcxxG33WCWFRece3FmmfSPMpByrb8ukgs3mmC7U5YQTqGUXvspEbusFvGUusEip3XN1XYxcdB",
  "key4": "4mQJeM8tyP75ynaQBe5NJPDmJsLXp6V9Lm2ds8rQBZBfYtU4u8pLkWBRiuTdsR9RqsVyJve7AU8unmJzbADXPq4U",
  "key5": "5XxyFCVfjHqVeNQFJVjnEqEL4hW3xK5JSpCSwm8Vr3czeHHTD3g7RosCNM75XgYMxaaPaG1Bfue1X51ZVL6Tfzjq",
  "key6": "oRHoqRYesNGq5PWNvBcSW4ZaARS2K7FC96HFPBq4TVc9JDkiZhN9TkGE4bNFbcTP5ygNK6Xwn4QuW9ZRS4nmvVA",
  "key7": "5XxC8GbE8WgJdbB4bgRZjknVcTJMMfwAwT9xhJtL67eBw2eE3cwaLhVk6zxybfPMUWHQf4FvZPUM8VqfB6w4Zc9x",
  "key8": "2KgFDKhvHArVxhaUHBm1HZRq4oFqznnp6hFLRfmgsJcGbcU7QxaUtRiVCrptjqdqZDSzvx9rXaSX1PnpDfKKcnxT",
  "key9": "3bLFFoYq4UNdM2mrd5NCWHDa8nUCMMPpTNuHVRxS9bT26HSYsY4u17Ld5xUut5Xeym9qxoTuRBNybzqF3CT76u7d",
  "key10": "67535xqsMhxzWcBEADcdwUwnb4gfvy6THLzgSaAZd1W6ZF8z5AtVzqsYN5t2Cg6SnLDcys8wKg1B2PdYdVWJbmyn",
  "key11": "WpnCVaFsnDfPxEq6SbPxMXCUzqcbkaUNC4c1CUB2HkVN3vJhwDStSxrUj8XZMP7FrDkDVHZncCLPaUUd3jx7Tma",
  "key12": "2M5VQNHtKzmg3srSw4ER7YLFNX3AudhNZnbreCdgF46bR1E3M52H75QSCrR2WoWfUMSqp7ZnTg7eod6fwjs8AVaX",
  "key13": "3oafi9kNNKugaF3oNL4qGFcJkj9gQjJ8rWwpgKiSgv1KngXMXs16tgiqwQNkXbvn7xwZbDLyLv1GrnLRqic4gyHS",
  "key14": "3d84CVWpDeukkB9kRoQsT1ZTFfC2Nh5PoSbuSRK2vzKLbWfASnGXyUfx8dFbQdH8uatFiZtmHuuPik919RbvViNt",
  "key15": "MkWuUuPw45W8SVXCWDSkm5zTt19rSQHenanrUByA6JaFHtZNxj2DbN85Xm4FFXquCY7WSfUkwsrHDqTwW5B6zRc",
  "key16": "2XxtgG26FBy36YTVMLACE5wonxGQqU7c8pzTscYupGnfeXj2j7kv9k8jQbqbn6kfbvhJQYeo9LxW33KbdKutxVAb",
  "key17": "5UvJmaK6LALPpJSfakbD63Wbu3xqEqfq1nrK2QQUFEWk7QAPETXiVk8pYLoxx21YEn4ue8qU6PSEzd6kJiErvica",
  "key18": "X8JBiJqS9xsc4TviKaLHa1u2wHWW2utMY6aS2ZEtUxUvAyokHwBDFCVnpeGn6rN182aZaKTstuQnWpTk8oXB6nT",
  "key19": "2ei9ZXF4RH3j62JQPb9sSh8t2ErLdnVMrvqSdWbgKHX1rASGDnZR8nfwZdcuqaEeonE9LmSNRJpEaHVE1PzAJiTH",
  "key20": "5mTexzbw1zf3sMW26Ltkb3irwgf1n2cjD9tUHW8fFh2aZPW7ytbZfvYjVyLoCsTEuedCw3XZQew5TurpQncbFzdV",
  "key21": "25sEqC2ggtzspnYxGy8Yz41M8dCHbpci9PVRPVNoyq9YSgGwr8CNbAfPqLPLNAty7rHpqUEJ2o3EUcCbveYrHbWo",
  "key22": "4HMWMJrUwqpFNCaqXHCd8Y7xcv7ydS1iTs7noBJ5zuWYbD3jL7jdvqZEpmtTdWAGK4K3y4ezfw4B7VE2sasmPRLT",
  "key23": "WkL3nX9jRR5VCRWT59QJ4g3BdCcK6pQCrBBMwwCnJdmWtuqA4v2EAqxs564dqa8z5ywW7q7JJenxCLzFtqE56e8",
  "key24": "3dsJL1ucTGjZQeFP9BbqWuw9Ugh2CHpaRRe2LNnEfMvWEk9Eh8DArVN9E2mJLBMGwC54nnXcBm3ShLKgqJTGC6ka",
  "key25": "3nj86kQ55xJfxATLXivZi2xzVuiyMTimMcMqhq1eGCWd2MPbTM5F1fgRFcYJCxEcNGovLp9QQrKBqkbRYHZFsoaR",
  "key26": "64MdC7QbbWJqifBB3RWCJ3vW8rHLv4S1JuGecuDsbnot7mCEecddA3Muq4g8VEGrAD1962JM8vniHyewHUWaxud8",
  "key27": "PaAbgiwsqdcvAjdKBspyaR1Lw4N1Z29DFeWFdYLgeCCGL3bF6AiAUBMhYeUViRXXLmewSuQWE2QBTCvTZaTGht5",
  "key28": "2BGhkLNAeifERiTi656D9fXgMFrJ2jC6vgiTZvXizM5rpVud41dK51v2jdeXQ8hCD2VmNvtuNvKr2uGEFjVizBJv",
  "key29": "3Gd59gC1e3oQdHSsT36tGVKCxouTBf53GseHH1VbrToaVQZY3LgP1QGb4ibBKxFmePXjousfLCQWL1zXGGgccf8N",
  "key30": "3FdwjjqwPiDqLRw2Za5hhBkk4hU2wUTLtnm2GfSdbEZtfQWRqgpgbT4DJGSbzRL5nhkFkUCYujAuzLngJzytdudt",
  "key31": "5cf3h9pzP7ViSuyv1cAXNTFWqdTLPDDs9nLP5RsYKztKNvDkjHXUWNte8yxTMAM6AE6gcJUJ3BaZ1hPJVyzJkedf",
  "key32": "2BbRnaMLthVsejMoP5VdBeTcB7euE4eK3jHSi2s1sXBm3iK5wXiAGFCStCHEdcH3qK3r87Rn7XdZeNugY8ZSKUkj",
  "key33": "2ajFrruWwhfjifNaJkfj8yoLnZcFY13v2wRCzZrdD79eMuTABDdC2QpWThzsrnDGMXwEqzm1szpWgRN15vSTJH9m",
  "key34": "2JfBj2ycD6SKGHEyAEfwnjzpSyY5dqKb2WEorcnatjxjVGQhdjnzb5TuUFbvYjvsMWYaZzkf3MQCMNECtg8hoyz",
  "key35": "2Xfzc866GPm7nLhBATGHrDB1g1czj5qjja5gYPy59mmkEc1UegSh316DD5DuqN3B1egw1rAybpVBywxUFrMaZsvK"
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
