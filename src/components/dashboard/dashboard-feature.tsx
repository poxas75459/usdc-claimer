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
    "a3toajn7Lz5novGDN5dh8qNH6V1TsJx4swz3LqTqgUpNjup9ncXTyZxmX5wNgjGEsBwcTnh2hiTdzYaN2t8NmbQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48PcUjkWdDdiFwcF1uhZ3X11RrH3TZmpBJCkFWDk9stb6bgWBXaqyCqQDiNGmyBYkGv7CwVthdeNMvWxtyhpe1a9",
  "key1": "4NP8AFRJGVXHsoxRDK3GnAKfCQgYzcHaRCDw29mrDbNd3qwsw1hEPnht94GJtR7Jq1YHCou3L3duqbEGVgpU5p2W",
  "key2": "fDrd1zfiXKqbgYuyuNdMGGvaxHJBMhcrq4tSeGSZqjEeT13typEM5o7k3P6K7B4SPP84RpR5GKG33jJrqpC7w64",
  "key3": "4ExU4WEsRmoSjQEYdKR3KscjreW9UNsD52Lc4LGAsZDtAacVwxVKEcfM5kgUrmUuHvefmZUcV6XkFop9genke28q",
  "key4": "27PbKEtopnGee46TNS9GfVwh69oZX3VmBPbomhPZ66gtuAqtdiACcjPw3ggtPo3HzD3ze1nuzXV9TcBf3qE9iQBX",
  "key5": "2p5URS17BKEXKKrc8qEd3KjHxfZM9FmUm9RzREYgTsQ77N1CKmqETHYMmpS29tf6dMHcPyQoSjUaXNMUWhZf7qcR",
  "key6": "3CMahJ3BjKL2xJbCg5HuMsbqpw59hDDeGkAYSX8eQ14yGS5uH5pZW2SYR1h2BqiFnG283viHMK2AyeqhYvAYWiT9",
  "key7": "qbfPgKZ11SnxnSuG6Ahfjzgnp37NUyid23fZoMpKQgB8qEfpiVBWa9f2ch1jzE3YwhFVsna4U8jpCuzNgHhoNAu",
  "key8": "3GkvNAJjBPXKKw32aH7tAxLcB688a6jqJDVa3CWK4AzzY1tkCrzZrTSax69QVFZc4AR9mHbyo4CC6HSfoLFVNwkf",
  "key9": "25BGzEjvSCeyUQUsskkSw6qx7zV1LdJbiTjxSHgN1tfnJmbjLmTQ14YubVLskHru75DiJRQLuX8koxGNpHeAbNHk",
  "key10": "4igFtSTuk4iecdhv4ZzRcCdofoSWdyvXiERsqYiW41M7phF7zJePfpVcDphk89eXTaWcWKh5EX9sHingc74Gqrzv",
  "key11": "3b6pbd6wUBSLhKcbQqTb1kcRJTZEw4ELu8WHF8Dr3YSfjPXppaxLVAZTd2tVwGgTet656ieQsNeMFxfQLopW4DpB",
  "key12": "3bdPzyjonSUduDzaY28aHSCb1jTDuXNPTKxTTbpQFhrwpBVmqXwHizEk8uhtCzDmhfKkv4Sr4wQiHJbKGmkSEhT4",
  "key13": "2J1BVfdmuc6sWZyUonWgX9TY2rQ794Hn1g5aRwkTLzB8Y7mvDjcDDwZEFtGcyxrGz2sMNJux8p9Gr1PNqjfrjQbc",
  "key14": "5JcuRwB7SDtXsCEFsB2hnRvfpESXrvgLaEna8yTKnPEgWQTLHjA1wWmoAD7JR4KT15mcs3kj1rdck99aDDshkAb4",
  "key15": "3pMUC2K7NwKdAreH7YFJTwd34mnNi1hkkTtBSehXLPziXzK1fPYmYzicac2c46NpHcsLSRG3B4cQxR9eVU6DDM3j",
  "key16": "5x5j6h8s3wurkohdNeSP6umhr82g7yypi1hRXnV5iLmHsS473pnLpp1uq3e3ntEiaFBTwwb36YEbsoYwMc749eMs",
  "key17": "47EdWdXcP5DV2DiAMPC3Wq693rN7oMGgkzCN6bJRGxMehWKphaqVMyPyMj9fzrx9hfdwi1g6rgnkacVdBP2xpt6M",
  "key18": "4ZcFRg8waigvXJJaBavFQ8HgCLfYCZ9e7GnFnwTHTozdG37YVqR5WCLFNkBdEJfzdRavnKuib72nTvahQdBNDjZG",
  "key19": "4vYn2j4kE848cmyZevPb4n5LgzfxYi8RYoGiZ9JsFx66ZiL9VB1L92vFhNsa5P5WXLdNsmCwNRDQjC8snm7687F9",
  "key20": "5EGmPXheGBHkxX8SboCiJCVUihL5hHGQKdDz2RLjGWW6SYvEZtBhgBfzUAMBp5QKxohZs5RoQ32dc5h72W2vX8B1",
  "key21": "43aA3mab8VAMrYujYK2UV2fMQenvGdT7p7V6sjvyzqMJW4g9ryoMPRCsyeSvem6coj42dTphdSX8sL5MRo28pewT",
  "key22": "rxzPQnN4vj3DbhsSeBbmfGxChwVRuvVVEXvQpkEs9rzB3f77LX7XZDWwz7qXAw4zmSEmUGhgSNzw7v6BXAPs89U",
  "key23": "5vv2pixiGzMQMXLtG7YR47F9j8ySnzxQwbzL9twYH3v4cCFs4dzjBLoHBPPZWj4P113snZYEz28gvLFncJGggjeZ",
  "key24": "56FWmrjgW6rJNd6jaE9h9VpGzrHqT9ogwahfp3CCyBBQBzKLnLuWHEDo27a7SjkoNZN37gryDYoWLqVLcEwC3V6r",
  "key25": "3K4EihwQhmNB59mj7qsog7nfEXdxZbZ8kbiTBVXFCFyFeAKvKuth1PAhLAdaAHTdhWpG8MEh5p57SfxMkD114uFd",
  "key26": "5rg6uZgsDyWCs2mUMdrq6r8iKhubpg6WjRyUukc6cPgt7ejkth6S4fxsTTbH2uZvfZEC3cw5jcq9vchRyfSSqiz6",
  "key27": "5La119xsBavPZTRjJpFDi1AzD8cogX1ms34vSf5aJGewmmfpbduLV2nGBZ5PT2M2JWC2JT1dViP674sHMwg6ZZFS",
  "key28": "32RmQVbPfryNtsG1SiZoWv1YGSSMhvTL7PMDGkNMetRJzVyQeEEWGRN6KCbq5DK2BFonQydqoRxmbyXzgkFciRCh",
  "key29": "5Y2nqxA3Ys1UsaWP7Z2ucLEe9t1w1NvnMsp9FAByvvgQeUudit5qDTsTA5t6ZeUpHpC4b2uuddVQzm3NDeXUEt1u",
  "key30": "4NSPJoKKUhVXVbxWtU5XTAZUE741Lan5au41bU2VnW1XtNvkowHbNYhLm9PE6qvSjogJd9aJXfRL2B6G1ttj2C2h",
  "key31": "2r29pUMup8Xxy35vQwkiqZ2oiivojyjqZ9bCmK2TQY9kt9bAjbCRKGunXDoac6ujp9JPZDqoubocfaz3yvzY2Fcn",
  "key32": "2YPEPdvY5yg9iB1hGvvtZ32DySB5UHcJxhjdoaDsD9p48W5ATGgZB3ujiv5vW6xw7SiD8M482RJFoDiFH19JqYRy",
  "key33": "QcV3ouDWB1MEfxoXdVywGcRCsXHi4D8wfGr41aAsxt1qtTA8BpwpYXsfd2ZfS9qvA2CXzhcNSyaTB7oDoqAiqpY",
  "key34": "273vCan2caJ4bpce45R3h6KCeAM3Hak7Nhy8u8ExHyt7k1u1kPs4gozKXPabAVPYg3FaLNN9wRxaGyWshXYiiJU6",
  "key35": "3ViPuc5fCYnzUyH11yU7s5TBde1LtscFMfyJ4Rg6HYVgGWbKhfypKVunskPFcnKeCbUBLQy9yT8d8iE5ak2mYTxt",
  "key36": "8CHCDR9ruB34UNdQWCad4kwQcGmVJoEVDqMTAq7cTocEc61bPNSMiBAVqsnSt862qitUEECKXv8wnsYvq2Tiyuy",
  "key37": "4ALefpH6edhuJefgjNz22jCGfMwgaXDkU2ZEB1eJCR1p5YrBLgYb72Q47xsg54NoHfT18zkmECL4ezDAqZxDoLEx",
  "key38": "eiKynKK3tUD1Jy9qJEf7uUGigyF9V6YrxHRMp77JGVGwiafAJtMDuTt7yroLwMMcWwbhAKyrKAk7br6tUTfBenQ",
  "key39": "2sZrE1A7QxV56JqcJMP5zovmFBo5vWWeLdXRZigvnFFxhxkZEnJ3npTVvez2WMpKMaxKqtCpEG8b7A5y5YB18Sgq"
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
