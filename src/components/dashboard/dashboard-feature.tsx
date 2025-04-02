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
    "2VpDYpN7q4adaNef6JC8txDC6xHrimWs1sFdrvKAWdn38FiX5wxwFvnbYzZ9hu6vD1n5g3HLaycwdwPje2rUKp2J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VGDTPVsCbQatf1RQRxMbhkYCpkY21oq2HNtVmLGw1orH8Fn1t1ghcvVmynN7jruU7XoNrQ5Kc1bMHtmtGkaPP6G",
  "key1": "46BR7M5RFMgUdZ5PJ9PjzH7wHa4J5PpS4AqBYfEDs963T9B3kC4bupzDLvVfnFdb1mQRHiBb7sxNF55hgxuWRwRL",
  "key2": "VoZvnJ6Kwj8MGSqek4TCJ5VAynaUVbDphVEKqcRCKfsG6GsBjyzxrW5bJLjUPvaSpdTWdx24TjyJxDqk3rjryC1",
  "key3": "3bAFXK6X6yDEfqpVKgHk2qJqCQY4JtL1K9JfGM6VTwhzc5abLMyn6NzPvoYYrBQocjsVm79FMQcHTwfPJu4U7JC6",
  "key4": "3818cRjRfYqzq9dxaJaBrY7XniSe7vmAkZpgsJAaagfKMGuecNHjr8bdExfkiGhn4n5bMnoc3dnLyXufiWgy7FJY",
  "key5": "DVwswGTiLB8Y8vKnkrzScNgdcw6GHecVwRDDALUiUp5i7r9FkTAR3Vp54FoqQ4DsT8xuTeNCDSm1urNWnSPZe11",
  "key6": "z3j57eKg5ZocbeMWWjjuYsftvfroBRX39bsLety5gfgqbgf2TnSePb1aCxay9cqecKyb4EBDQj1Hg2aasssJnW1",
  "key7": "5eBVaheTBSbG8nkYsSg2RTNVeUt68XTeKQjB9bPeTbVdEE6DCiJnU1wNK8MM1svoBUxm9jTCRwsB94QN73zEve8i",
  "key8": "2yAABK9Ngr4NyjWG8kb817DkESQRfpHraW7dTdjTuEGsXdXvvYoXUrohWApeCoM1ANa2J8ZauPwSUXxZXUeJ36mU",
  "key9": "3cCL6PkJ4FdnAZkKxmBc68bSNNksAxHWepiLf6LJ5Qqtx5duXUgBzvDZezRhrj5NhgRDc5gdfTuhse3733kHecnr",
  "key10": "42cnovyptVZBRt6EM1XjcpzMfrJk9aLRG6Qqh1LEy8dTjKJnwLdRwXqBLuV2pFUZAXjEpqbJ2MYX6rhfgMWhJfiP",
  "key11": "4psFr1TL4pFxPgFWropZ4LXk1FtbYJnjH3GZTB5rvALSfrQFLc2ieqhLRsdYUDT4MKji68nvRS3cvH3NHfgXaXqf",
  "key12": "4XeP73Sj6dG8qMfi1mU3UmVPGz7kTakWm6C74mD7zyhUVDZZW9X2v4TxRo25yienRRyDRqzB5ZbVYmxRr9qhmM67",
  "key13": "APdN4aJNMjyTMdhZ6GLcuE1ctCj8JKZj2d4yPGe9EEe9NnWHjTN2quMSbDeKfo6QMZDLuzuxn2jCLrVsMspE3iL",
  "key14": "3b4jfjYxULKmjiNZcY4BwTxdNqSPizVZBfuQJeDVkw3hpinaHVYjKjsL5GJ9ZtJeqGb85DDBrPwyXTqATVQJ7iV9",
  "key15": "24FenqeFbvLJqvmpwtuXrYMMPzCCZ6cGY6fXXL2gG7oeE7mUQG3WhC9Pxjhrvcj2TeocJ2sJC88aU3AfeqBR66BE",
  "key16": "24nCAV4CpNDK8cYMwwpu93Xm4gzkGJD3SqZHSiaoS5gk9C3XZcKeJk6seKhqi4apb9v5BpRYKfRWj4peypsneSAx",
  "key17": "vK4D2nUEnzqG6FDphFQYKhZBTXFtwYWzj6gqjukVnBhMi74WiunBCu6Xcuizi4mtkRY9GHBARPSyNhC1AquH3RK",
  "key18": "3WeRN1N2QeDPvH7B6LzC9cT8aQxp3ZowggFwXn7JidN3NB8bTLpuf529S5Pvpb3Y56A4h1RJZaZo3WHUpjPdLVn2",
  "key19": "4gfdLLVXobCrjusRQJA1TY6k16dUSegNUCehdg8L2DVXSpJkaB2WGPK2MqYay4jaWRS5491Eh16GmU3PJ1oFqRZZ",
  "key20": "CUkcNNWDV46ZZMGMN3DLf68fWA1JcCp95p23veKm2CFWrbVSCn4QEUBDTg7djFwtv26CtZWDEs8mr6PkhR4NKgo",
  "key21": "2J4ecPAAB6SxLPD6ShoToDdLGp1oPQUUhkYWFM2JNKSDNAudPjNgKzwx5EYtMTrwvzvuC879YA4j9wsh9cYvEgUx",
  "key22": "2mW1RcY1MbhZQjrd52Up3Rr3q5HdsMqNvC6A758gS5mZuemCsLJwx2MK8QvnNWRmr4KWojcdFTTsp6sq7igAj8Vv",
  "key23": "5YpAN96aBE6mGAx8cbE7bLwfZXFa1NLL1BxQE1XrzTDgxa8jnmhyANCL4k9PbEZJ1C2DM9HWYvwnWPYK3L6A5XYC",
  "key24": "2S8CGFFf25YkrJRnR4EyKwEjxDg7hFkXS3FSUAuEis8HTCsQ6Chnt4PQRivFeGfnk9mpp6CgSzQVgoiwtjHh5Ynj",
  "key25": "38Ar5cAfXysMGF1sWNEn37PRZW5VjJKvgkFUjK2cdXsi4aZt26th7AdMbGeXgcUF65nYeEGqGHUND1VSJc5xA4NU",
  "key26": "5PvfUsFY8BNatLmN7NrH6QMoC742QqLYQf9MkkVQbs2DSHG82yso4wvCw9i43br2ve672fUVvAjZmSDo32u6LS48",
  "key27": "3JG7C3q9FNARA1n6iPqFNt47TiM6kkda5KvJ6WCN1VWiK9wUHZgxwH5C86KjWbtyJVK6TxjsYixmDssMEb7K855c",
  "key28": "zNUZkfKuZETyFWquC3JpcuLRVrX78mpAsKdJGH2S8GzT1ASKoTujzdg2FKh4wUDP2aAyJj24oeSPuWuGaJM8B1x",
  "key29": "5SfoBbdHpwSGHPVzJSGEhscyz7k5dZST5XK11r7x9MPBRFbTvdQpvTmJw8qHjjpmpVYD57cCpcjpncNb39edTtQw",
  "key30": "tH9a8fY9RNzoRonxrnSSEDkcHpbJ8yFB9w3ZBgidofvvy9RhawXgcedwQU8Lwk28FsBh3RdwTBNwCLyoznxUzDn",
  "key31": "44ZAfnHVj63embwQqEDVqtCEAtd2WdHyhZVbUxXMktE1NuHyUjUaTz2cppUCGt8mcTgtqpeXrpvJgdkBXPmDG3e1",
  "key32": "3opQsybVUeYjTXnQB43YYpCQ4nMkpJCmGBRbuDE3NRGU7M25ZB9psy91vrohtmVbNzzJiizqEqk4cgzm3zr4HyTj",
  "key33": "5LvbpRceuBJEh2pzLHWYMX7D89sN3uHe9aSiqthvBYL5T9MvKG2pgvRqtZVFFTWTrTMp9BsAj4grZu4abpH2PsoF",
  "key34": "3m7F75rBiGhYEZVhNLFeswRErU83A7yo2fTJ96crJtzQdQ99J72nKgf1J7qRj5h11EJ1tDK8r2dbxKEZqgXTxzNz",
  "key35": "4HZDHztJVZvdzc9XNkeGS58DG4JPH2yj5yxr6m73SgU5vfRyiyAi8DxSacfuhezjDAAekUvJP7QJiFQEpQ3zHwBS"
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
