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
    "4MhTwDU39tiuPNQRnZhzwpGL6oj9YsgXkGUDvg4MgfWvUCLF5BMMc9WhqkympBwEmQZmk5p9AwpJ7s1Cqy9mGiLh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4en8VG5yDiN3jTzKB5qHXx1d7pPeoB1L12CndHafyaaWTt2bZbxbmCrKXKjpSabgv64RUywiuuBVz2UQha1NP4JA",
  "key1": "2UaV6T2WB5EM7tnU1NsUfaGXmcq7C9q8Wye64ZfBqRGmAYnb2veJbtahajsdHC2UyhZ2W8uicxptAMRTA4dt83Mg",
  "key2": "3GHckPj1nddxpT9DUoHYcNdWKWCKmrvoJB6ZRLppfnxiZr7tDFiRd5arwvcExPZKcdGPmQ87sB7QEJoh1HqoqMJk",
  "key3": "3trfqSThZphh6nr2hJBxT3SAmN4rAGdr213AhyRVuvxYGfamG8X6jFcsTk6JDBt11ztK2x6AG7Sv1m27qDMp1QQ3",
  "key4": "5AfGX6KX7DNV6xjr11rjTTPaS1A1VaLp6oPzQre6aF364Dm4P1rFobqRRvWUThPrv24Vm3N9HwhgrAaiecjPb3Cg",
  "key5": "275Du73wahMCaLgxMfi9cVkznHmdSZPWw2oQB7WDrTscgXkEE2ehmpwrzdh9WWJj1qiEWbZgtoaTgMw2jCstTQxf",
  "key6": "5ffMYkY5Vvt51JJDRedXyDSgFMZ2sX1PRW1LG4nhUQD9bXiJt2ZczsxyvbNFB4H3A64jtrFmwfUgqNkdJDFepRVT",
  "key7": "2ZCk1wJNkc6gNN8ks5egU1TPF7oYqiYekzj7XKtzrZXn9QB6x9nrU1z2SVRwLAfi57uCY5bf9k4EqVRdRgUCem6u",
  "key8": "4EfgM6F2dtbkKVsBCzEv1FNMcUVhtGzNX47mdG97z4yHQZ7rmwfQEfCz9hsaLwZvkwoD9KiFexqBTUJtkdQXWJJg",
  "key9": "5wFxJZsS4SQ8Y7uS1J3mk5njkf5CFbcqUNfujKSmWkwH7bb7YY9fuHGi8GAkKy86QDArdp4bKapCT6r9ewdpktGk",
  "key10": "4QmHGcypBfAGG66YrP82YNcWdvvXGMjcdwdU31uSyM3CwNXSHL1wWJjEx8cHqqnUS9kAG6zjZBV6J4be5fL33C8X",
  "key11": "4Zvv57H2znhfHpPFe4uvQ9vf7EfXroppyQRGei4h3g4A1yuAAejtnWNaGJ6iMqKUbcAGx9gjyBScoWbivgSamHLq",
  "key12": "Etn2QmokSY5tnQ1heZe1XxdcKeKDCHiNdUJWFRTUbjSYn24YueQ4rQ5icc4BVjNpJuSCsPeZeSRwKxsV3rWN14R",
  "key13": "5HiK8sYwpv4oiLGVA2nJ8LXu7dHoABjZLM5DMRECb5grQW8rTX9PJWxDMMRw857ia8ihbnPJiia2HGjE9pA6vEUu",
  "key14": "4pDx8NRgKxFUvetEwQnJYbRSemzkhU45fRHTYJq3AuPshStZMXpCCym5U3NZRoFeHEEVkdnofZEEX3LddGZyxiiG",
  "key15": "5A9J1mFiJyj95Q5YV2iCnUr3eabiFbH9fQdK9ZqrtfDLEVikkcNYF712UrX6aBq4ZsRkYk9mWgaCHymFgEGTiBxC",
  "key16": "nPLsoLACYH5i6S9cSv8TALbz3BCrCjCR54HvFoovgXcZtcE7iC9KXKJfsQJshNSJaW52mk5hMxUZ9otu6ADhqfX",
  "key17": "4utvZ3wnBrW59jxGUi91qkzEZA4nPDr57x49dFCn5t8NLYnY5WezTkYrDKWkeAAJ1kbPhrCfE1hVoWuuFypeCPGg",
  "key18": "4BNAhUJMh7scYU7utcUCPN9WdfVfjUTG3VxJRjsK6KC2pdg13ucuhPpRckS2EZuUGYGa8aT7irMqFpKqsiSjWVPX",
  "key19": "641opEbd4CLWYtJ4736eSwBAv48JMFL93eBZivipJBZwSU9LgmRyKtvLeZkn72iR2VgpvH8foRpifTLGKWya4gz3",
  "key20": "o8tqEPbxw84RxviRqCAgmRQitswxoV8HdR5nNanygMYGs6K2jQZYdHSL121Baet5WqNASLYGwgoPCPxFx85rbAa",
  "key21": "4jNQhVwKiFCY44f5gqJdBQ9dpRM6anCh7FhuzaHsg6fFk89VCjQkrQLe5tCJqL3biYZiYNtwgwDQKkZH5XyrPfiM",
  "key22": "5tih7myyXNsEwpLEtZbVe8uPfubrFfgHPaqykBcGhoPxQHJgBWCmsXxbjTCUAKUrsQjb9jZ92fQGsKYJsxsXjfij",
  "key23": "5Uxt9tC4m68VX9iec3msu9seaPAGAZbJybtWa8KmNzmLCnnNTu5HWBKkLs311qBR8kQ71bA6adKUqdBSt4GPWM6F",
  "key24": "5h5RTYYBYNPNsLALxinw3fyrik1aHqmQMQYGNGXWL2TZ2yZMqRzNAmSvb7M7wbAC9pam4R9MK43HV4hGsdfxPPpq",
  "key25": "8qfmjbLN7Gm8zmf6bwZDp9zmoBzECJbJDSrYqYfE4hT1KfV1WoZpxhySrqa5hkg4RSx9S8B1SuDkbqvHbfm17zB",
  "key26": "2ePGjeSpV9gcFZqtziQ6WvQMtQxxCC7WcNQ1hGDZY7cnLrXqfcpugGjS3RsvyZVpvdFCSUiM3vZWaPvMVQvbsSZQ",
  "key27": "4FxZRvoEMkkAwewAgBtaeFEqxcWnY3fUk8CstqjufVDVXvQNhPoTLGkEbCS8wpAZxWCJuNHvjUJmPXECRhkCPDQS"
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
