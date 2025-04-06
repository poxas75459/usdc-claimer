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
    "FVTKzcgLrufuyDkUhrbeQMGRrwsazUW7PzECFvjcykXk7HbpvDsSkoGEv4dJgTeJHeSb2VauWNf8igx4faZhZYs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gngdXhHnH5SYjbfUwZajTMy8HsJzY4TtrDGh6kHn7Smn21wTPm9d3eG3Ntw96piP3jiwvtwVuuBfhmCYbqkiLTN",
  "key1": "3zfAN4Pr2aAqb72ZY2Bw5jrwZLhSSgtrRjUxjTrwM1t3p8P3CwnRoxAHCfBJDmnHCCaLyRwB2cDLqimeHHJ5RCA6",
  "key2": "38bhjYkt7pttnNqBBxvSkk4RLJWsmTPQ7Gv5EMdMVeVcbhyrh5axtXDBkDdxvoDqYrtZ1VWr4ytC8qtC8pskSLku",
  "key3": "4EthPciUvMvPaMfeYFvwHsoXhmKU3D8ryTJvjzKxudjBf9R9gdLLGAwyKoGXHJNhqqThQpPhzcbrtQotWW4i22dq",
  "key4": "XcP7XmpvD43XzN6CwYtxg7hCRi7Jf81VDdTCGXUu4BLxswBuXZ6BQ738dgWYVLxe8wjNzpsDeJ5qx16vSPnjJJk",
  "key5": "5t53RV26NCatPcbkd1gs8QdpudofhqC3k95yJSZevFjtmx6bUWnVmUGFiT2aHhWGjbrGsN2tUpzm4kWj4PrrqJfv",
  "key6": "2LR5yKiR4ACWi9dKMd5JEkiTBE5zgRn5xGmTkPChWm386pqF7D7TFs3rtDFTFcNsaCT4uAYRegqFU3kzsrpoEPQU",
  "key7": "5M9QRECGmokMqax1JZECgkPApvXq3QmRsDyG86kRiEeon9wmg4twjkng4QfKkQSjNzLyseoP88Mwo9KJ8jNKdmNe",
  "key8": "2MrckDYZFtxm65XwLcRsjKPfCNBU8QFb4wWpmFYVc8rdDZffhQ6PQom1GWcQtBuAtNCqzsjLju8Q8DqQJstU8qRQ",
  "key9": "2qFiGh3HrQZamAb67RiwJcKqifahshgAu5EhuiZS51J1kYpc45G8MyzoUdCCVSBvmmzowFbbpydZ9Q4a22o41Uyq",
  "key10": "4GxSXtQoJYErSEkQdVACnZM5qUuHYaMXZZEe1A1cRnLqbQFBCffR1ZCC5RMMQtznfNd3PMAscpPp8FprYDnQ7eWH",
  "key11": "bUet3tECnB4vMe711pDdCcZEnTW7NPBJWxAyrCBP72s9wyorrz5GMMiGwSrrW8g6WsnVmtPdazxx4Q7Le9YuZ2Z",
  "key12": "4SqUn5SY4NY6ayKJUa45Ey5CC1GPJ9exhzoC365J2abc8AAXdwrj334fmpBNhhrANt4HjhD2HK2fYPu4fobc5qHq",
  "key13": "4oec2fwY5RZ1Q7iTFTyU6pcWVgb4KivUVsoFKRcsXfJ1GSacEDiEF2mTWua9EG55kuUvcbSnCvtsD5LKRpcYF5yi",
  "key14": "4zAe8ayfMR8cYK6BfdkXR1MxXbLZjktdiktmaYFWAEphdpvodQW4XfccPX2yfGaqHQitwfBoxCgS5UAmAeoUES2p",
  "key15": "q8qx6Ka8CYMUbUVYhudAD3Z7M5zciYrHvtnLZb2MVE1TXMeSfdS9WEyQJ2eXxh7fdx3HsDUQhna9GzAESgjJrXD",
  "key16": "3HCppfvAdST8KLy4twQLhropkN4tsjrxjZdmMKSg1h5gCqh69dBSahkbn7DDPuN25Z7JuYjsH2PywPMsWLanmXRh",
  "key17": "4HpQLD8PyAk9mdmsqobZRwxqWpH9z2N2FCE55XXDPHtH48fZRs5bTdrfh3SKhgTkQV1SbYd16d3GJdSJrBuCnxjB",
  "key18": "5Qnqo6BzRrJpjziKfB1PtPEpAfrxny4DqJjcskoFqC1vYHurLf44D4wsFwzwAkhZbXiwyobzXGcLxYFn6wXzbH4G",
  "key19": "5d5iBCsDQVMHptj7gJgYrAv6ARUEC46MRjsoifS6PardzfZGYP8avFrodTv8KmJmV7vCT3Bnd3htyS4aykcXNn1N",
  "key20": "5Ugn9CiXv9r9DkXXa1ZbWbQ7dfCR4zjJb6k8dQtCHR1wyYezw1tQWeUDuoHpev563Q9h4cnmNuCNpfNSZgmAKcFB",
  "key21": "25mCWY8Zy41Dif4oEiR7MJfmPCCvmpNNDB3jaffXi3T8RSoHZWuMtJvE769Kr6d3hwydcLfK8jdCYWRToEbapEgG",
  "key22": "5491KG8xRNJtqzE4w4B41DrzjGonYxLE6QzokPTp2rXGDgF4DPYmMukEtXakHJCc3SRcBx5Tb9ghGAuaxUFnFnhG",
  "key23": "UGF72VYzBncyG7mSSWrPEiuaqnhrXQasRYrkJCiwCKzUxVsH4JshX1EbMThALq8gFwYgcQNRfr3xdruCJM1Bj2V",
  "key24": "4j1b7E8NQikNUDvnufpP6hMoJjNGSeCAJFAyZDuNuvB1FusjngGuVSB7YbhiUCrNC8JiPRvThjSUaXVG9iFFdaVH",
  "key25": "bdCsrnGFANSuRohbziPW25rEnQjoASsGuujUHEVctzD6vzrqtB2Jjiq26Gd4UqcBcSUNgubh5DhDGsvNV6ajosC",
  "key26": "spzNffQbyAFPQ5tDR8a2ZJTe2bmVSeGnzZbnEJx5SuWX7xWjVeM2712xpZtmipSah3tVMB92KBChnqknNbkYBCy",
  "key27": "5hphuSJM5Yygsf1htWYNvtsRMyC2vDPaDV2UEyDJ71X9EijfxD7BoG7KrHk36uTrXfd7179ePU2DLXTRwLpRe66C",
  "key28": "5mmSWCqWnXtHCENoRx9BzsoRwuXziupKycBA3erg9gWHECNKUcQiRaBXc66RBxtsiPL5XZarziPKsQhzgmaNgaY4"
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
