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
    "zC56SyLGLdGjPp1Q3Da4QbYLxdjaRJmZB5Wi5FmurrJWh91X9iy5vVaybqrD3rGAaDAay34zfBNrv9fbwvZDCz2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63R8RcfWZtPyTr8XhjGbN7RyGSrZH63kVq9EZZiWQQzPL35Li9LJ9p4YvCxCVnoRjV2Xa3V9Da6FCn3WYrJQHEVs",
  "key1": "5ZaNM2ztDusZ63gQgpwyh7GFnqkFG4YzFEw3HfT5sAoP54HACJz8LPP7vx3UurHZXFyioFvQpjZpw5m3Go5T4rNA",
  "key2": "5dbBR3bk8dEHkATackiooUGEDBJU2ekzxUuPji1GNBRpzUhvWz6iXTJWE52fYBm87dEDypzDQyUxJqVvUwXPZhLM",
  "key3": "5NyS875sgFfTeeRzzWULTe1V34Fu8SGJbkPH9AinFhpL9VmtAcqzmRxiJH2XKiCCNGqAxjaYZPmcKqq6QKjrLtan",
  "key4": "2s1tVsBXxiHUdyFEDUGDjtfQ9ozA1PBdvnfU2ToHHxq64SgD276mehPsTccViqpBRWuSSSXBPHFjEbXKPmPE58kZ",
  "key5": "QRvnPtQaymxzq5DCJTLwXuePWqxstKWVEdeqS8kp5LKQ4ErP4jKrN9MaC88PwJ2LHaYdYcBsY39WrLmqGa2SncT",
  "key6": "2CjZBMosqcR4sLgheZrHwsHS49eDd6TPvAwSNPg5vHqBPAmCgNK6g12AMqLHxbHVukyg4gfPxUkr6ZcEXdJEz94V",
  "key7": "2qEFQP1Qe6dwpGaDhJzNWp85SCn83C3K65wbd3Wxs6N76C8Fsxx6EjXKnMH4bKuwWZs4mu7TR65Hesexdc1sTzjJ",
  "key8": "56hPFpEyWKso9cwjNwv1TmAqa9kr97czqkvMgaSyDPKY75RRXpGZjrNmHy75YcNEX7G9GX8BpMX25LdmYDJXUzmt",
  "key9": "2X6t2VtX72mSNSFHL6gqeRi15XADLZ78VD9vgVrJVdA4yVWrWUawXJZ4tLqnaRWJur71ivZNqbzP4kXYsSbMkkS",
  "key10": "465SZK7TH6XXdKFREPLcCA6qwRS87SgkBmp11pz9kwnbyMYfhjQJjk47PfQW3zF7wzB6MCmqjuRa5VnLZMm5Rs1m",
  "key11": "3bfuhD4nfPbSiNuLwLVootk96so1EBn9LacSoMMcJ2mDCjPPsjpiP53puyxk3hYbbTyisvhLFrmTLXwZM583Ddhz",
  "key12": "2Tipr9q8ZGbWCfMv556Cysg8jwtF2SfmqR28LDaccx7nwMDirhn3eHqXPFuFCy5beEHXob4coeudPy7J4M2FVXPS",
  "key13": "2TgT78RUyGsvb8GFyzV7EHynrayh5hJPSTjhsZ5RqR7yXXeHdRiy8dXBf4d7BgwoCaXATYDj2PQ4w54tj1NkADe",
  "key14": "2Snybs1Kq7i4iD3D3TCifuY8Bz9PKCXn1vV5Ksc6LNizD8jLMdyW37uq6WvANXgQs98Z1wfJLcTU5gkM7eS4pU1U",
  "key15": "3Ey6vn7Z9uSqMvamSgseVBGbqRRUDmycE5MHeeyhUcw4PUkFi12PYDarFuAggUP5L2bJRVeDo6RvViJj3ksEZ9q8",
  "key16": "57wxQLQo54ukvdrAq2Lpjta7UUD9CuwDKzuMvsYnedNjRbMyNUkuvFFah5oTYSCUiRgBNPo3d11XG7GJRC3CDk8U",
  "key17": "4zSWVcxNZ8GE12VjNkMveP5LA3ucU8MVMpKRTGcBaKKZ3TEqPis3T4RubntqEti849kvyW3GnAZKiufr9gUsUfKp",
  "key18": "5aMLQ9Vwz2kVspEBs8p8vnM4zKdhUQtqAhyi7AstyhYATyXYZHkGdvt6pp3fFdVrW2oJwLGHwWqKCDPAxRbMgjTn",
  "key19": "P6oG2KUJom8hm5JLzmKM3XmitioudzsyupfzjYCHNhSrvUWaDEdg47ASqcNziwPaj8Nf5EFMNCquf6qsbN1ytAs",
  "key20": "22DrbtSrkpLZAbmpTxqE4y8hwyq7WRFo6yP7vdnk61zxUSzhN9sezKPRCxjuZoi6CpuTTb5ABub7awKQEuXdCLDQ",
  "key21": "4rrNwKjbTAgWGU5wYKCRpKgx14jD7cs8tkcyXwd2Fwz3uJXRYxnEnFD32PCH6bKM2tkyjZoBVRUfQ5vC2LbsagHZ",
  "key22": "63PP4Hu2A6xncBuyb6s7hHWfU9enKVY8TQ14V9EVndKFLPmGWkjiPLbzhSvZSrpC3e4JFVY9VWPrQV8hZXRyC9qC",
  "key23": "2S9pJx6y8Xz3eE7hukxuCwWJWj8As6wcCCr7KZR2zEcJe7qxTUCgvGrE8YsuREQdDSsUfCqXyxwZUq8fFg9ygLAA",
  "key24": "5hzwW4yWWa7S3QVX8gzp3vdyNe7jxNa7qTVV1CQdRjWv3Aamd2WfJB9PPCRzNfaTcEUebJ9rpF8YMPcwDPvAF6Ho",
  "key25": "4aiJZfTRKXBUAKUaogmbU8wE5AvKagn74i9Yucy1UnbZnsu1LBa626tU2gqfM43HVinJ8igBZQMzQAWCiELuEmPX",
  "key26": "5NDz5PxfS8xR4TVPFSQLUsgFQyDMKbwdZMGpuUEVGGdAwTKwHJibazZaenH7JJDDPaS1u866huYAsPnPA8fHqhB",
  "key27": "5dpF5A3GU6HHFaZtPFbXsKpzvmM7GfhZpc14vBvc4ovPJJMUfDxnhzc5JbnoVmPmvzmjZedfUp2aX3jHSuJDVYk",
  "key28": "3ddUyAYKUu89xaCnBV36yDpZutNhwkNxFjWUitMh6SH4cTrVxYzxVwBBJqtUe4haAtfscaY41jLompe8MtR5GMDc",
  "key29": "ZPY667b9ta5MszL1YA2birFHxvCh25RM2bbeB9hkDmgY4qoRrwBk7P51wLrs2aFxaWrzowA8tNY2JNyZT7BzZ3g",
  "key30": "3kYESGeKeMGhoASaenVpJTrMrjUJNJHXvieEazrUfSJkxZEhdp57ZbsHPd4FJKyMM36dhtf6fjTB3rScsQmeq17V",
  "key31": "xkDgCcnbnZLXFmvdeJ3x1cvGL18deDYyakREC9LP4c74B5iqn54yeykB7xSEJzfsUMuEahcJMCrweKxgCiDY3Ci",
  "key32": "3uaX1JwsdY8DsDMxYWPmdH5vvHsANsryypXZdqEQJqVJ5FDX13XzrvaVjyRAXorKBxLEYvJwgf5Kco3WqYpKCGb2",
  "key33": "3XbeTcnoZHV6GveB3jhJhMYmAXwkH43JyqaEtEFKtgf9QBXaGmY8bopymFLVx9othTFuJV9YzB3KVAH3Vn1qC62b",
  "key34": "2AZpt5qjUFkciqjs5g2AMvGtUExx4nHSkAEMfKPmY7FXqu5BYSSQE54Ckb1CycNRntPJKt7Wk9GFJCbDq1nLHVpu",
  "key35": "4yftZfsd7azAy6FUAKLam3WUZhp5A6HzyLYrfSiPEms3Jf652LsmW8XqFmRoLfDxQYrv3Lf9RVJmzSZ7rQQrW2NR",
  "key36": "5xDLDWVFjiGRHN1H5KS3Y33BR7pdxehGu8atFDahpstVmmysWuoEPHh4cTWwSGbuu6fwHVXbbfchfmWp3ing1urk",
  "key37": "U14qnbL5CShYGNf4cuav5R9fkmFU53aaSN4qhYqcKNuNdZm8PQfKhh1qpeKn6L3pJ54vicJDRBnaYd6CraZgZK9",
  "key38": "51BNDpFCN4AJrp5uPgtwwjQbMoAPZ5DZHAV5At5zPNj5WkD1h5EA28pK7sdwyJFVvAUgEbpNp9eBWdzkuS88jrF7",
  "key39": "CF8TBAwZBfCcdEzRJyLrdJdS68aGEi5vTgTxdCv2EhvWXhxF6Jc5HnMhxNAu3Yym1qpp8KM6VNwUZuL4m8Mxm2v",
  "key40": "iWXQTVufHQin1HGNVg31sHRWKqUukgcoo6YnbnrYssnbFJ1gw9TMAttqoYBgxpKhSQRtH3nwweXDEvCdrgijFAy",
  "key41": "52WTbQfUSJsdsT9i66ve6xXrNS1SedogeHU2U2eKZX3wi1et4TqvrjMqbotrY2e3ubEcbq2NPT5p2NePQJCemR9D"
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
