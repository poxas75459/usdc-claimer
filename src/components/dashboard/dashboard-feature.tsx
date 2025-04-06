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
    "5bWkTHeD5bjSoHtrcQ57BM3cf7epGjnsu3SprsxJHh8FZFWDFVVMs8v3UCv8v1EKVDVGdWD3sN8vjfRaAiETr3DX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VXGje8w4U4TVqftkNaqrLcx2c3ThjuDmtfApUJPDEafutGcPMVrBm4o9j3mZ5PM4MMQbXsfiFU494k1wqHtqwLK",
  "key1": "5QEtQVM71tgsGaxfU5La15kRmVsCZ7URPBZti7M8tD5oVCw4aTQkS4N9dqhewa3TvWUz5FFWexCPdNPJosoaXENe",
  "key2": "NVo98wBuSzUUnbJ9HKUXqkKBNfAJBVHmuBYn9Y3i5nvmQEKZwsDJtHRUMCecLAD38KNa2mduHLxLHG7H8gqgtK8",
  "key3": "3NWpkaWkwSoRJGuZqxn3xwLtXYo613fvuuN5YZD7ET86Kct5rpV9CKwJNweUk1LiZead44MEih3HQQWXk3BSXsuT",
  "key4": "3LQRWpGoWjCCgyNZkN1adivsgYq9G7YhJcqDyWrXBpAYL7rK61om1Y9DkVPBWb6hGgEnPKCEsaJPwa3ax9LdaHAg",
  "key5": "2cfWbmVj2xHSgTFTzr7SnePtS7E4aE6z8WSTrCSS7iGGr7WtJ9WkkP2QNskzZLVPiUCKP4J71Ww8cQAUmvZRUc9D",
  "key6": "2wJZtpdg7HVKiKeUiMgKHGBjKnCTesFn4QRWkd4TjYepZQLmaGxSECH7cEEcFvKahY9zM35BYtDohhRXQoCiY8Ro",
  "key7": "LAMoFUuCicNiByDJ7A22E9vowguWJPR6sGfwPRqTf9RmcwiFJ1aXQ988Fg564MWgbQvb1WgMU8nFc4jDDEjjSXV",
  "key8": "4aCEC9ANtbzy4XB5dtjhixVT3FhPzkEsAwiK6asBSn5hBRZEDNxiM3bAgZr4ainsVRfpPMCzT2B3uarnoabHruEn",
  "key9": "3YXyi4iLT2e858reem3PKtSNREk8N3eZ4fnkem2DjGcE7sJ3jw9RhzkkjezUcrMCnpSENo9PcsJMmYnSGzH4oVBj",
  "key10": "6pUtmYBWChYSsCLR6JqVTA4cVRRPDWMV17er8GvmvTUQJqYQixF4TufxrJJBEwKLmTeJ4eAaZdkqGm1tMMZ3FGG",
  "key11": "36PdSk6UeM79pmxM5wDoQ1LbTPkc4Bun8gc1PJ4PkZpUkXoUnuQXFLmPLXKtEoTDV7AW2CstUcop9FhZrJV3igvc",
  "key12": "2J1SHGQHXoGaie8CjD6HQznU96QZkdg7bataWa8TyzFZd2y2Vxm9bhuT7CYPr1YmF3hXrVd37rJUR9S83y3ei7DM",
  "key13": "51McnEYZXLsuDGuiqCsK4M9TzHeteV55cpucPPM8EsSUVCQhHarBdHcPVYQmKhDBKyHUiDyjNtTw2xM58Uf6eShy",
  "key14": "3rDeYHs6UAMbFw6fxyKcyEidxLp2A3bRCMqHBjcd6h49wL4Jwf9PpCfgd69az8Hiprch9N1gDQTEzz36vyZiwJn9",
  "key15": "3DRUZAoTemvs3PSVYS39jKHemDFQAUKAtaYT7g3HvphHPgww4PH9VGzgV7hS4oZtu7VjMav4gnwhu6cB1s1VJ861",
  "key16": "2nvakYdAKN2Si9igraB92gGR2mLYFVzc3ZHcef9b7aukG2TAoBXtmdK8JqyVQWZH2niceyEs9EBPh18KapyvDyYD",
  "key17": "2HbbiAzkeWojAMwA1k1syrPfaCD3FdyJCUzocsiwVnqQuhqjJgmJwEFY64B1fM2QcjN7yEuyWWuVNPT4h2WEnvUr",
  "key18": "3mKPioucHzNLdVwhmgQ6P9zPsiaDEkkEFQS2kHJxWRpELawdrpG8v1xhrE2BXKJNueAgH7asRHmFAYyPTYAdjgfj",
  "key19": "5aG6yQjjUhku9gQY7rw7BbetDbFt5rzzT926beG7HdvFNrDTK6keeBae3qSwcAdwWFo37DF8d6DYF8AyrXY8fWMY",
  "key20": "2ymgL91StfxQo6S24NW9XvTQqPWsnfjyWQYRwmnq1nskrPPRKbePyHDv19bd8VCvZ7ScCGKtyirM4JFGWhhQLM2C",
  "key21": "4cYa68eKH3tXC557yskZj89gbpT5WPtLDVDcuv6htRJfL4FUQbm3h7dWVooMqZmiShLhfCoq1ngyk6sfjHLijuvS",
  "key22": "WhsjssYZzLW5oyNTqL3avTQCGki8kjQxa71bSncheJb9gj3DLv7h7XMrHDzbJAsc9tLRxJT9PUSySCTts8AVN3Y",
  "key23": "3sTFzWyGzPBrpuPKjM2owrCCx4hgA1EUDEHnEjrQFbrFsHfgtCFRCzb1FokaYy6o2t6KbGWn7QjgknwebGYGTP6a",
  "key24": "3V5FPTt66oUrxWpD9wRiQzA731TEQo5JM55DNHf38FVWmUQg2VFSnyHHP644z4jPwGS4nfy4w7REDFMH8iXBCt5M",
  "key25": "4pRR7iuJNmEcADDeVJkN3ifYovxbPnqYisFXVraJT5xBnU4WeNCqRT9UPzsoLgFvhoTqbXdgpWCErr1FWYnLmRmQ",
  "key26": "33QHVXQshrg1FzFzyPQTjotjW7bQSraE52cVxdQE4pm6VR3XzzKDUfkGEt3k8d127pcRzBHfoSUo8R6eLfogc6N4",
  "key27": "3kNpw65yDfMfrmqEaY6TohefHZwBoX9BnHBQ9DMAHYpgBxXYiYmYDnQ7n9QmgcjApE932wNHaaWfmwnJ8dt6qqTS",
  "key28": "5dZVU4wZq7d3h5WbnmgyZ33KeuorgHopi1Jpn6RfXCwdE1uouySr9sn6U38gLjsLnT2ynND3X63iTRarqwjoMGut",
  "key29": "4aHSaX6NiC6t49aB2kaTRQWC3a9d2NcUTwaSt4qFc8TdKFXVwJ8ncNCGZaK6cQWQRYFiwGRtT2U7bbfGT67sPFfR",
  "key30": "ThAa2chWnJdBLdeFrAUhv4AVFSDp7r7vzNhe7iGu9PjADhu4chmAg8YSxDA44N1PHSaszgmVMprXPPKRh52f8eD",
  "key31": "a8W2MNYYdLkN4Ghhb76hL5mMSgUEA1oocfen5EcJhQYGx25GL977smhvtwfQmt6e6ak8SbjfpPQiFKUFLaxpCex",
  "key32": "3h3toWUtBVgmio3W1DcKukJctM2FfDAbRfgntXsYhKJzusAUS6iEemXidzQE1Zg5F4C14KP7581Jad1B9g8tGTwF"
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
