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
    "6byuUPTmKppU8PVuqPStT5SgvZvhLuWF5BBxVc46eXUMoZ2Gv4H4Yk3KHJhTzhQyKCvvgbhYpxyYCcUefMAFiVR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zY1Y6A6jhSSgpe7FdSU61FrLJ9pHFkGiKy9mxLXwLMorC9sv3dCodJ7HucuDX3tHLH3776rV2Fp3Y1QDnKA1uRq",
  "key1": "27DKUSSq6xzgCD642rGxM3ExezHDLxaDMKKFBtzfbqR3fJq6isfppLuKfa5XiBxaycd6FCcbdz1XBV5bNgejEcLv",
  "key2": "37Fvm9LJYr3PdRuBpcGQZ9eK3xG1tcEqU7ssFnhouqkhyByQC7R17mFkN25R4mWPn9yMhJF2aazSbXMeZiaNSjA8",
  "key3": "4GvsWFCgBifDiMJUQ4MBaeYK64YW3VpqLyVEEa2A1jrBVbyJKngf3kdY1cEsfsM8edQKVCayz6Gagpu81v28BXWS",
  "key4": "28m2wbtjfJUvP6pMXVwfj8iaWHo1J5BV1nnj1kSnr4EhsLkm74Wv3moKqGvLD9JBhfpPaoCzgcUSK1B8SeNip5HC",
  "key5": "4GM3miVirhLRXE7hTkr7C6Tm8jQ1eth1tu9C4k4nhuKa9ewEY5QWZDrtm9Kj8dADS7B6UTFyD8dX2MXZ4RRdGkwG",
  "key6": "ToVxpd2JS9FNJ7xeDLZ5sCQZeifTzrHAXi5k9k1eRhthV2FRC8PNdwWzNWuJ8ubMsg47fPhoRc3W1RbFocJsqDj",
  "key7": "5omEpbT2XvQgVcbf2vpsCi5hMrryjX73JqGbKDGNxSdtuoy9CtSmeJV3vogHjNLpGhCmkMxwZmQm2VhHRPsuEGFj",
  "key8": "2VnJQ3XxGrEQ1p6tGfU2NkFV3sHZP66218TaGFPSsREkCyLGiK1fEcLpYPuyRmQRxGTVnRemcDi5UhCZj1h2wHad",
  "key9": "ZtKpce45rehL3enCo9uh9BviG2RTmLdEj6FJdnGfZkve7k4HdphXxAAKRv3sp5BLZMZRUa6ZEi4Z4sDXPbA9Thd",
  "key10": "ST17dD3D6wniMpLBsAMPZ5i6BsCdfM7pogpTx9Szfdt7oQL5pWRc1g7VwgiUxpEWGhmgwyUes2bgrdeJ32YyZri",
  "key11": "2Us3iv5wwZjfwNWEqp74tcHRpEL4MusM19oCS1UYYPeXqZSgHcJW2JrqiEPdspx27eUsNqPZzH3h8Y1CiQebBUbq",
  "key12": "zxdgecnMUzcBzGXhKqvFpQFS9dt1Ykc4tp5hXraQuYyXJvbvttZ3xy4P2ThyWZbMSkLDwfXGNEDveAjAhsTSFuU",
  "key13": "43uqHaMHDwmoGw6Kg38ii1rUdmtG22dFDrw6Fu4AwHehDtRBsnSSU6k6cK2CcNzZ8L2Siyk5bnzMmY8ov5YaQdtG",
  "key14": "3U1fEEeMzMgygNaYdSZEvovBqwiMSu6C2Hywenjh3nMZtGcKEQszuqJaNFGdFM5JtBxXX58GkRJCN2gBR6gmYn8T",
  "key15": "4939EvofvbG3pBFgPtjLgq6yqQmpW5jBoP6api8bp2DKSefTean3uSrbgtCDAriU6xE941pyufYy35fcjUFytoEq",
  "key16": "37Dehoe962sUsUkGmXWkj3zeuyjNQUZ2GmrA3GWMDZDEMz5U7Xwy4ygtJxy7AaaESK9qnPZB6mxxbd8it3J9KdxE",
  "key17": "yYPjCgtmFD631VU2Xt54MH9vt37KrhD5y58aUnE2hNJGDjYpG8MvddrKD97T2ERppYQbZEUuF4biSMBh2tZBJZS",
  "key18": "5Grsc8XqX2VVGZfzDhdnBm3cuqpADZaJ5yY6F7q98ecopVZqsBv2drT9BvHqXfrz6qLpcvMWnV8gnnDmYdu7cb7x",
  "key19": "EHhKK9fH8FFRgzuwDwVEFxFG981aKaUiuG4FFXDFk7az2c8KY9vsgMXzQ2op7dihkMYr93PopVbuUeb7CDAqjtp",
  "key20": "2URG2M5LqyA2GEuzKCvECy5bcvCnJ9E2Xj4DS8jWqfeg9iVrJzkwDUAWj47rTYZ4yahnW8niJwGFaE3HUQ531p4G",
  "key21": "5wVRokPvw6tNfDa7xSN5fqxzpj1513bTixecCmARfELJKZEkcee3TvcyMJZYZSBDe3yYQrsHkzyYMUL5jS1yb66w",
  "key22": "5ed6pGGc3BnicyzEaEfjjzwWrS3aiqWYMzkt4Hc675E5srmqD1SX4L6QRNwJDuaTNPNesNB3sRTMRqFNv2kRhVnt",
  "key23": "4btRpFiBzaG9KTViniDKZbdzMHKExZTgBoYHuKHKGQcB6BbVAUEwcM3QamHoxw41BdpFwAkBx3mxySL69AVGUUmf",
  "key24": "3firrXt8a9UFYv6aUreaCGuhu7JZrH6ztmYQxCC6uvY8X9ZYxdiiusJD7vCEahVMXMUNnGTWh8nDMn9irjxUHT9S",
  "key25": "2XdcYP126Yop8KDCVwJXVWPYLGwn369nL5FJk8VsfucXpFrEUWa8AP38dphpFCsAUskVaFg989d5NLJiSspuMwkr",
  "key26": "3i5abj2RCp28TLSEWACKBHqBWMcbK9H8A7MYC8YLApfgTvK8ehnWqMftNnRwrhPJE25g6uXsLAZQPwVfESjN54z5",
  "key27": "hbnTGyAVvwji81nSu9NsbuoQHWPZZzYeRbGyDVcDXu4ZxxLE12zKeUdEpgKLd3PDXn4fNzbhbM6cqq8qGZVSzH7",
  "key28": "2KpJpsQ18EAJqLyTD2KFnamNGvH27R5kQu8jorDqf9bjrmXqWHmtQSmzvgWSkBHufNpH1ziPGEsCUerYt752P2rn",
  "key29": "4jH3vysJE2Mp1brToBExXuuZDDYCCFsqLn17nWqKB9UF9NJcRqPh8PHh1svTQdf22fg3UmCkEDyykKRNgv2R2kY4",
  "key30": "5StyDruNarbwJaNyo8z3aT7kMyGDzHeQ8nuXK7RdtN15VnNZFBghEcbXMH3p2fcZYX9XeCxXv4rT29wShQxQoAuU",
  "key31": "3Ue3JV1Lsa8tPNeaPyVwxSY76xHVygMofLV5gAFeuUiCQTT7fG2zXTsuP8WEFzF8MfrUNrvV54pQyLb1b2LihE8r",
  "key32": "61EePtrQR7ERQGq5wcWLL6eMVjDtWSMZHJi6ffEfcrN6DpNZzLcL7VuKSWptWvSdnDJuHrSmoiq1etV9rE3fqcn8",
  "key33": "3YnCFrSA7e4av2vmAhdk16pugUdxroU8TYLqWS7F42diFebsSmAUwTvFPufhr62MfobVsWMB58mGHyoEAsdcds2o",
  "key34": "5jaT8d5vwdwLnKyfhndwwA5hdAxfTCfqovBz1GW8DCrWvf5SpjbTE3sUgHmJKHozzfG2s28B74USxDmGTY9K7UDs",
  "key35": "3BT8B7FfG34SxfHhigV6PnL77tcPvyrfh8f6VKbfSDcppmGZtEThcc3nAodibYvqet3xLeCi5Ze93QsGDeheLhS3",
  "key36": "5mgaJdzabWcVgn7Ns8ua5AL9UQDDEVPnmXptPRVatGuEaZfYQJpEhe5ASrbCgvWz7CUDvi1mcno3Npd2GgwBtq1a",
  "key37": "4i6dJhdDXanMX57XwaQbgViAyBfnC2PqsM4ashUCc2K9DTxYnGSRFdUJddeAUkXgepCd558eYL3kBWSuNJyHt8go",
  "key38": "4tytXy2HYWPWGVZDgP4aSaU8ovnDHLyrsKuJZyvz4STqSKvsHThwJYFC4u2mjXFL5HStBXK7dDTatX5UiVMXhgdF"
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
