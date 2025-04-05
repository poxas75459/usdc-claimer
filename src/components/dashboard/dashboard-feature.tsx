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
    "53QwJ3CmuVSoKsdouJ7UW1KFZsxFEUWMfNTNEKixrZbYW81c2EcXCyPeKQiCM5wpby9jjFuw2TuSSYiBTxXbevkW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VBMTkC7VZpPB3fJUsBLNp1YLChsd8cACky6J53k8EAEHeqiHNbLcqM5knXc2oQH9dyFoiJxduYQ8waTJzsZroAS",
  "key1": "52Q1c7GS4N9WmjAT9dbteyTpCZWw8rQA3DmftEXUA2FjuawPZk7EPWBNj4oNABex64aMZzVGEwSZNmAgvhyDfhKU",
  "key2": "3EVrGidUdxz2dH3jwhjK9bjJostSwvjdEyVxWGEu5V1nZVWdcct854z7S34Ey9Dg93h1fnebFWE32Rg7YBbk1qon",
  "key3": "5nnt3QA1kVD63jCkHLY7xYeCCw8n9o4EBpPJ1fKX8SMAVG6UQ1cSp2oRi29xfYkk6fXg7urFFrbVGis85itnsbF5",
  "key4": "5yL8ZBsFx9uXiU5hQE1P5Zgb4b8SG4mRd5ayXqgPZVMs3JpCPpQE58JWkVtzJ6az6oHZxmyjuuWgFFw1DP2MFLdM",
  "key5": "2ue94WT4VuMmRTR9w5F5q4z86YwhmyWmRimJgwZDdaX1Bfjfd1stszC6edVTmg8QXwYbpLm4SwuxdPyeYP5Av2TZ",
  "key6": "3yggxeXVzJgd2DzsCyY67knxCmBxbYdEZ4Ji66U824fuREmornWYtnMVmeuSixWwWtZ7YxkCGvLssNbQcVLndLZM",
  "key7": "4YYf2PjwFEasRgiDe451Vd2m69o39UqFsyyCj665vxieTUFd4oLRqjPCmgHvoTeWo53f6QGHwBXAyiccDnQiFPsF",
  "key8": "P4nvmS2RBdmy43XCNPbGjPK3dFSQZRcTdC4Dcy5p4EimV7WPnviaTi1uAeKRbEFWKktjoY6faztu8N3hcUFdsjQ",
  "key9": "3UGjPHuehxnRHGjTZD2stjMXW9tvDZYD4QRQDXc6sC1xbackBYcNJhjQjHdSpQagVMDTVMx1CDq6tTkDHnkazV7N",
  "key10": "4jJqJ8F5roanKgSmGadEQTpPSoxEWBUQ6xCkm9dK3J2co8Hb9htBKQ29W8BWQC2xEidFgCQNPpdNnPnrdWbCzqS6",
  "key11": "57Qonb5LtKn8anZBtChwtoETwopuy5txYYCcjdp91tZ65mzqb8QNcqK1HR2Qd1uZ4ovpMULzuztC7G6YvuR3gE65",
  "key12": "cEAfjcBnc8EjKgVjHymp531YYS4AgmtXZBHjpxAi2abQS9PMJH3ZUrEp52DppL2hraCqcuJAPctP5C2QMZ5U9U7",
  "key13": "2ZtbjNaHx3QGUammBqXpjwzgrs48WKrzJdDNevfxSKRVyNKGS9EtZBDhKtmnafDqWYWYtV3uWe5u6QBLUfKmNTVT",
  "key14": "nGUazLDCSyhTeQezV9TCMGVcuE4niW9F3ZogNXshNoj5tLnyB3UG8pVhCbHKLzQWy9NQVTcuWf6AGsuduFo2tD9",
  "key15": "32qYoMKmDxE3ohacRqPh4uMaDgbWFB4S96PfYnv87K3TT78pkSzuWXQe191877KyC2CftxymrburYW2E93NNxwrC",
  "key16": "2u68Um8qjwfe1bU8CTRnZy3MbuZW1XWwPNnbug9ubQ53jpxx3ymoPAwBxiKbXZ2XBqzy3jrbadNKMrbcqSyMfd1C",
  "key17": "GRiTC2qaiugQWYBgvpUSemSDtQBeRhiW5SwEwEKYfvuQrEcdAfen6SFe3GGHYrnEEiRrX1P3EPLGVXFHDvTETh3",
  "key18": "3TLoDexabXwwVNfKe59KBC8AERi4F6eavpB7N2C8XGExDtrdbaaG4hXy6bQnuD3HpfVbAWjnFYNrvdYB35TZQULY",
  "key19": "579ZRTcu54isAxHdyjv8WRQkns3ekniHqbZexsC5XMwtdHnN4nd95uDApwhMRRERWpqci6ApDUti7nq2QrMogcbk",
  "key20": "SFxvocUsGbe5WemieguPVSiE55MBcrLNtaU5MjuhcTGBTxch6igeBAqJ4QVzTNFHmjvSUGyzg93Fy9tEHmhtZF9",
  "key21": "4ZtgC8G9ohaqCJuJqmVVqbsiLzHWiZMQMX9WZtnrNkDhqRbRG4UF6WTJnvnZi6icTKiRnEXRdwcLkPr4jnx2nUPH",
  "key22": "2LqKsDvw4z9X88eTaiHua2eYYsEYbphEWxbpcsMxsdHyD7YTBCc1L23oyBRamD7iv5doE7FmQLEyvqS5rdfGzix1",
  "key23": "3c45TT9vALFHoW6kbA4vp7ZCP15mWB2oVup5v9DxELbrPvwF4xQeFi5Pv976NFDu68dvs8peD3ptSeBwT291aKan",
  "key24": "4mQA874ZZTgwHiLvfoZwk34FUqvBBXKtY4jS8Gusf7xgu1i5rc22gFTTtQZVZFCEduQfznmw9KYodVte19ECELqk",
  "key25": "5Ydtmd7iyTFnwUXvmAsiGpFVJZwh3bWob7gdy9UcPMBoSiARSsSEHBBYm2CsEeMcRLu2a1VrwizfNZyMLyGKy87Y",
  "key26": "5FXuEAcVsWc3D9Kz1rBbkWYJEy337GBJTfmpb9GaqZmRX8xct4DkZTHkrpevT3TL7N1GQPSVCnPLaWLhUScsUaqK",
  "key27": "3eJcAkFxaF3XYdRjcZ3jvUWZrhk1BjmXGq7DgmFsaHGR1gCQ43vnpUP7u74qtXFTAY4Fum8b1Fkrq1N1ay5UaQsB",
  "key28": "HLr1HMR58vFLW5yCvL1dUDi5iUTN3PYP2Y6QheFAT8pdp4ao5UPVayyTy6c2fW1UViduXXZj25MZoxKPLU7xfyj",
  "key29": "4rZKZbaTq64o7QxFyChMVRswH2vNmCq1vc1nzwmgv8UU5ouMih16fon8KV7TvKswdtkm6SuwTogFePzmjvbGCGEY",
  "key30": "3qCCHp4EU2FR52HDwYczERN1jSpfT56RGT7ZNbj6hDrehRfsCGkrWsYfdX4eGSBUtta3otNRZ5bFiRu7A5TxqyRw",
  "key31": "3R7Xx93S2DMvc9sp9waVoaY2zeVvrDjnpCMyQ2uR6ct88SgY5tAjViHZhD9xKirtKY8zoEyXLwzYDVNB27QxmuRS",
  "key32": "5aPsSfMns1FCQmxGHZS32Jhzcu9sw2makTMGeRPt5GdFGs94Sfb7xnrazfoKPX7UNnzfDEowzc1U2TsAc2cZXVBN",
  "key33": "3gUwmxNaUfRh6aFefzajixK9BpjvhiiXczkyAR1SswNoEEu4rsL6dKRQ89mb54BwNbkjHtZjh4RfPZ3cEbEu2sfq",
  "key34": "3RLFEkxFRZDBYqkzEjT17e8d8Ure88e9QgCCu7cV8Dg5CCZExsZQuz7h6KRZkX7YGCN4NgQW8SGpQnZXBW7qz4YH",
  "key35": "7VNCJ3pSJt3ug7crdWvmoq5GKa8w4p557taiTpuaCgRP4d7SDkrzxnZkGyKpj6mTf37ZdEVC4xgtBnciZYhyybg",
  "key36": "3n25Cr4j9UpYFCCnNGKWpW62n8TWxdFQb54WjgDLqDV2tCe4nir9mnfojsuKUJ1FfH7qzMuvkeFZZcXE9BXkLKLE",
  "key37": "4z4Gtw8V3MBmiyp4Vj8jPRs1hTKoofoAZigctwUUGScnHTKrNDj9owyEoArGaYTNj7P2RkiR5j3dmGymkFGn18dE",
  "key38": "31zbfBFYMHxaFSCHqkinvGiDbAySutckHpxue8S1G8UkXdTwHxLR1newDHrMBY63wFzHuqw4CkEF6FPqDGU2kQMs",
  "key39": "3EvgfXXwdsLGwqAJ9DQvao5XimpETSxbcNkNoHidTb1RZKXFBVZifYzXJ4ViXe3CkrjKbeCyb8p2pkH9yKS3YXAM",
  "key40": "2xcrdR74mqiNENcY31pCT1q6MW1vYV7ukpsG5Aukq6eZdp3vp6j3TdpT1h4TprCpx5W47Usc7TTs8uScm3JuJNJP",
  "key41": "2DVAibXWsn9A4HCmGnrezVsAeUPUZuxzBNk7vpm9ZCqQpyvq9eydjU6VHnJMTNGHnq22qrb8M6wSQSRWz9f2H1Lg",
  "key42": "qL8AT3aA9Ssajb3A7EJvk7gnkwcdseHZswYQBjDSXtvNL8nNPYNeJGejzi6X4Av8zrrcTbyYn4Q8oG3dwbpwfn6",
  "key43": "HF5HEuwFXCvWAbJsU58tkiQG8aTonbwGnyhpGfdvDJk4ee2WQmN6xJfptWr2yoKCk9HN9fANUYGh1jVgzXxnXJy",
  "key44": "4zn46orihHdYrRU6cNBL7jMK5AtVwzKEZ4BECapZ9VD8wDZdVMNdWnUU2RQJQv8ggzH1NqXR5iG6mxQLy2a3JiwD",
  "key45": "4MXUr94JRoXj4wUtFkEXBSPexmffMDsbqFRxoUx2PuNXMVatS9RUTMohGyHWRgn9b6z2ptDaEkoXKCvRZRBtYESy",
  "key46": "4dd7TTdb3SJ1DqqbMLW4hgkaGTdtbforB1D4kBX4TUfRxzYJUKtuw1qzQvLgrKk1u24xGwyqQ74Sq3HHFTiV2BFN"
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
