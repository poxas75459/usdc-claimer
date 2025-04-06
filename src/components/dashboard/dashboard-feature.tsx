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
    "3Qv4RPBy98QALs7MAgP7Fv56JpdahxZt2tjxhGktDkat9TqkS2qW7mZoBHXuW5XWqB77aHKmm5JP7DKcTX5TTe81"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5D2fRkUWz9HDMDhsCpXmSC15MThBiB6KE7pqpqoJJVYFjG2AnwxcAPjPEMXePuM8sGrHGZzt99BW6LTd8PTY6UXP",
  "key1": "2j5LUNc5XBSAEPQcGsEGszg8sYuHUpqiVCC1EoJuGvkS9RzoTKPqTavm1FDG1dB3xbir3o7eQGRdDAXfv6YNYW1C",
  "key2": "5s9EUwBCThh74ugVfbHnxPaX355z7RAJtpnw8rYErjQXt6zowHCC5ZLqNskm7P6TmDe2zLmPG6VZgkDyZpGMx2aV",
  "key3": "598zLXww8BykvW9gf8yeHe1zXTgcjxKK6xB8YspzEg8ERMbyG85HL3PbHeQNxXnM1kUEVD7pEFssfbbD324YbywE",
  "key4": "Znc5ib7HEm99TtXwK3zZdmiSSBdUcpRd6BUbBjAbm7dVECP4g9hGfZextZdCf659Bg3xUNjJmtHUCPD5yThbC9x",
  "key5": "2TRqi8YUukE2ziZgftTHZTV3aqUqJmeU2tg18RRT3ZH2i69XaWBExEwUewDfpvSgKmMGm5Ahq6o1FSp9JxGaccsh",
  "key6": "4y8r18cAP4Vg1fkgM5fafqCuoGzgZiLpasvHfXvHn2urT9kC4svJDLpZqMufywpBU1Ua3gF2YCPsYuCNHbAckCEZ",
  "key7": "3E4RouuiMB48nSssurBAumQSzWMGejg4iAdwc2CMDZyYtemkmbgRZBgwNbGs4bTTuXhVNX9zZ1VPkAuQLBX3aPFw",
  "key8": "3cgSbJ1iZwjqA6RmKSpeQjGxFP4qXVgi58sdfAzm99ZVUwDDcm5eWJFTGgWFfYeo3tG7C38WD2kZFQg3gDTqHra6",
  "key9": "2a4T7LQELMAFq6Dmp248XciwZbRbEuuVo1SVyW27m9xrBcpwJp1PcSyeRpHK1XiERkm9oxHj64osuPfEUf4puYDt",
  "key10": "4TnDU7vq6oaWVxMqwr9qn4RPMq1Y3QumDitFoW2rTSnJqWGDtS89XVF66W5mABL4Fw5GzYpo5qx4sgLoZqM8PxTY",
  "key11": "3TwibtfibMG2z7sHww9u7oH384sgjPL7ULvhENc9eX7yyQ7rzcXy4keNdaVBZZ4JAr5rcs1fKTpFZYkATmrzkN3w",
  "key12": "5ywFVBWFSBACjM6b3XgEvoEKabqwatsPiHP3xooRGEAvn9VcBGbM2Wda859TWAEq6CCfvaq4rYZjaboxD6wFyLpj",
  "key13": "31twbQt2X3kpkGuqaNgReB3nPK367BKPkXDKscDvkQadyBxzLCQayfZs1vpRSvbDdxBAy5p6KbRzb1vE6KjwfCCV",
  "key14": "2McxBwVWj2JUjXti2QTTP8WwFU7TM5tvQThhv21T73wETTZCGDkERxU3ecYh5k9DB88h24Ff4KqWnEMoMdbyiccv",
  "key15": "5Cf2UAF9j9bsnVQWHQnpnGkvkPbJ58zqTSEJDLtGzCBfTvS8kFgNMeycuHU7zSKQp7Gr7fqChPvMrEqznJ4gV5uR",
  "key16": "qZ4rmGCHxQVJi2EEsDB3QZy9rUL45sjPCQU4FJ38yJj6pmRLcYzQYwxxM2LCgYn16HBs14dTXkJ4SYMbwP2z4Ni",
  "key17": "4iFcs1sDJihUrGzpRmbxewF62b2VLTV5nxgFoythwL5nYQZtKEGuiY3AKoaVUneHCUiCKaZafk7xXKzirnYDUbmo",
  "key18": "4VLcUmRrHtppCk9RqVk2ckDTMWRG4oGrJgAe4BeHuWR9KRMxbKZ3211upBuxxCy4jbfT9Pz7SeVcpXDD4NfaW975",
  "key19": "tqRWKsaDGLcpLMNLAt4UfMrsRZMSFuFcuH8HgTRoxwQvsGCjZucLqfJZQ6wg7vM79fn3kcakxapY7banijDnRvk",
  "key20": "3ozMZmdjPnDYN1XHDHLwv6mdZMRhyE4ZUKWDHSHj9oSHo7tHXzdELuDot3mqEiCh3wgqQxfTuQQs3nMgVrCV4giq",
  "key21": "3LV5HEERfLUGXBXKvyziQFQ3Uf5yUs4NGFtKpUfTsrDmD79UtYqhd5r1YoEK3v1rACL4kBKYmQU8Hx96vCbXn1tA",
  "key22": "3Neu83jJQDztrsQsXshKe3haUUWH7HB324ufWKLBuraxe4h8XHL7c89rB7gbiGRdsRUgyxR8UEFYx8gpH4998FJF",
  "key23": "2gqhU4Ub6LbhadfChZVSjzAEDeU9mfxJX7182vYYwLUmQBtYC2G27RczmmpBbMTAKJAGinCRPaYfPURT98NCV8M3",
  "key24": "29xDspcg7WK83wzRMEMvAfEH5Ripj9dU3WmkCWNhZRpDatXKauepguSdqZFBGdfgbveXoLijrR7PWANRSLEHyvtb",
  "key25": "G9Vtexq43ZWN7xsqd1ovjx4FDiyBhWNxchWxUZMCuaHP96sGHiTrRGoq2TXid7e9JH2AZceHMJxi5RmuS9gYGrS",
  "key26": "34sAGUxN2TvPqHwy1Z9G6FEmY5uYYW4jPQ8nD4xZL6gp8F2TJHB8mFWTrNgB44w4CABdwcWhAp3Z2QCbt3mjZ7Vw",
  "key27": "QbuivkYz9DRVB5AqcZybmCv1kQMViUWwkUcMannDXzgBhkP4B9fAT4oybhuHXdi7w5sfHeeP9KT8ubtGQ5ooPqP",
  "key28": "wSuAHiNjNQ2fsFzE3cPrU8q1nyvWhvjK3UbmyazAEq1ko8KHr99kgSh79oqVE1GcTCwEStcmoZqGvCFSkojRBr9",
  "key29": "2KQwXbu7n3PvyKtzzKSmDoMSq5P83oyGpBJ6fuYDkQGtDaJzAAS8SyeZenXHTHstP8fqq3YGeFKaECnRwp4Ezdg7",
  "key30": "2BV6Xbvu1nyrm9NoahME9nfTvK6FwjQXAVbpsTtBzGVL9PnoxhgXE9sXuu561rPPcNiBPqoNYjtxoPoCsvfZ2jsP",
  "key31": "4G2JMo9bZjzdomVZZ3mvMqzQeLhKiQDw6xBwcy5nknrmvfJZUhXs57XKYrUArPXQzxEd77LfKBnCfC3u2RoUjRtw",
  "key32": "3nEbxZjt7Qx5rseLBNZWbwtAEP5QYqyxPLCuoxCPNpADvGLinCMX6aCav2H4kr1m1hrgMMtk9cZVBdCyYR9vFC5q"
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
