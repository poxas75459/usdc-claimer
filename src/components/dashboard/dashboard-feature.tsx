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
    "4qA8uXUXS7fiujDijKiup8CXB8Tmb4V5wYuqkZSDVXXBDEV1WxhE7EMDuXFaqKB8xtvHpetpXyTa1xnXBaQymV99"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "d7QkgtJadzLetGGAjAAZft56wfxoqDC61ZyCK6wSAKHPoaoxtRcHfNKDRkzep1qyz5KfNyMZEZq25TU5yqMwKut",
  "key1": "4GkXHZUeJNoP4DHzTRhUCKE28qLTTZsfYC4tcDATq9ZPuwJK93aFyLWkGU5haqD9J1uDpAT6f9p9sJj6XSgAHqkV",
  "key2": "HjhFKdY7cNrmGpunfHzNx2mmoYznNE7h8XUE8A9giEn5pKJYjf74VvbHQfW5oLC6WE8kRzMYmTFTuxHspXzvRUm",
  "key3": "235xj788iBBteuVpnk48x8VpEcDCE3poqw2mXekeyyNdYaAwDC8e3GbAsE7BQHNDFsLk3YzUfPXkwB4g1aFMa6GZ",
  "key4": "43Y6SxFnNLMpHCjpJm4WCSH8PAVWVotqaWLpPWcrKm2utKVeiV3Uityd8QyeLaBWpGhAs2Z6a4qLs5T3rkWvQjrg",
  "key5": "4YStbX9YeMB5ztYtStYnDuW5Fp2qCh5z3Y5SXcvsTS7txtoCV5i3aitv8M1vcyk9e1umnzeSEeHZx1ze8FuKod2q",
  "key6": "2YSbSriCG1USu77UTJiDjGGUuDAcRyEhmkKjHkovumGJtbCxMMt8GSCTs6iv8fax6Gm5p5mzzmdh1KFhPbhhWMS5",
  "key7": "2oiM2kidjj5fRnpPG2pvQoCFyZoFwyRjz1Td4Zwqkh9ZsSdq14zQnR5yrvSbDQANzcG5oWhNnwGej35xzAwjMijR",
  "key8": "4sADsKP5rY3xMgcMHrfrByWCaUS7JtmLjvayK6jqmEz8AEJvx4PAR11gZoUpHqNLAHLmihi84uqEmF1Ww75Rv5nz",
  "key9": "4cRpFZpE9AJU4i6zYa75ZrrmAnvBRbqRgUPEvxEdyM58jbJefjpezKmUAJ7HFE1jjEwCovCDPpD9i8tmyg4NqPWM",
  "key10": "3ufNUupYDvrhDmGUpkM8DnAwdckUHncbqMm8DG216793fXuwzyefRgWpGs41pDYcKEAdZLi5McfkQZfWG2NnjDup",
  "key11": "DyiYhagc7CUdJXWvSCm63xjPiXpFAmSPyxez546jY79UdQvzdobzLeEf3FfspVkkh5DxkAfEYxfGjjwt7qdizDj",
  "key12": "5xjTg1CT7kvGRARcifBxNdwXTyUdt6VASgW4mcDQWbCQqJ63tRRSTReKyDsD4i6oXGQMp81syBoyQotdcq5YcwDn",
  "key13": "45a7kuppXZJXXoQ3z2zTtfDgLeVawxWYPfKDApPPUSy6twRkxi3LLyKAc4yCc7gGLu74XQLFkNsWirubeeshTFPp",
  "key14": "47LMqCbiBV7NVyzi1kfbsGUAtTHH99dUwCx9kBW3tUu4sgWxUqrMafxuEc6JwehQduNLQ8PTHExYYxSETfgvEv8X",
  "key15": "3to31TBBfw4w7Nymsyjce1c21THya2prp2FASevxbuZcFCgH1oA2jMPGPpj1t9eUYmcC314Es2bCjHhnYfsyHUco",
  "key16": "4oWGE9BYKtibS7VMvA98hbndPThAcX3U5NKzHPKtixkf3ajBziz5GcXKaspnAMP8YrDr256vcfAcfHKm784PYRGc",
  "key17": "3kB6Zx2TaBEUJT9GCBhLfJdCSHPo6d9i7AAHepJ6E1NNCztp9Fp53o18zr234xTeV8SvH6oGaoF8yJEPt86M5UJq",
  "key18": "4XcCxhdGUbbWT8jCmYbiDYdHA2v2wBUFRVvPWGUFnejKm8gewNwg5bZSEfqQHraVPeq9iF2wz23aeX8CTMNikiiK",
  "key19": "nXn3op6DJxaJD9SuR51EszH1cWwhLt4Yyv9LLkpoczH2Tp7rjWtSAHWJUxDdNV9PaBcSxqFKKQyn3vMZxWN3nrn",
  "key20": "W9m5LJ4BAZ9WYU3eVbUi6C3kJdsCfrvsm2zrP6ZSCGd22ve2CsBPZscDbu1VtFCJyAbJx8ChJDn1GoUSnFHmU1P",
  "key21": "4Re6KskfsrQH75T2QkAG2Jr1nEeLcQoNrT9JkbZ8BcSmDnV6BY9wddkFyywAgwdhc5ahNDFPfGFafJDtc6nbUJ1y",
  "key22": "G4M4XDVvtX9iBh1iCE9bCpJtgjcv4zSuLTvw9pYL4cDTgSBV56mFgBhXZQf6EMK2H6gb3ZA17eEtpMuV6c1NkEp",
  "key23": "RXWPs9eJHHiQZekHtfPED3FC4RtR4UPVmqprbnzLLSWu3x75yw5Vqx7AJb98QdewG6TK1pvcjK8qFPDsnSDBHmL",
  "key24": "6vqCqUF3Brw9JnarEmpJHaD5KePSPAnKu99dJqJG11RRdvYMhxNf8iKfyopQNuiMFwwwUYia595frFmkx8rfDcq",
  "key25": "2RHSFqTDgQm9khxTtSNxgTk57RBqFEbL3jdv4jmeG5TEhmg6SBNRCkH8jCckyD5dFX5t6Jd6xm2vX4W3iiSKoj1w",
  "key26": "mmnhuH8Vmh7wG5Xka9kiJVccYj6pArffxsXzxyrpFFVQTw2zLfy6KXGHE5nXnnfvwfckQPQwMJG8HN8xGhGLi98",
  "key27": "9fUJqqotPMU4jakckPirCfYmJXCgVrhpFHxYNaVdACnxzNRyDaWqLWDJdVMHbFbG9hV7zkogUuqoZHHhrq6S8so",
  "key28": "5zhR45UVrpRwHeyEdKsxwZdwCunCyN44PaXUrtGvAZLEeKR4tED98pRwhe9ohSC8gX18YesrRRyZVGyNCmu9S7dP",
  "key29": "5XhkCEuKjzGhPNrGDbB8Thbe47gWWeTCA2GCn51KAD8BmVYu35JZBGLj4sqRbJ8K8A1STSGaZpheZsEEPBew8eaL",
  "key30": "49RCLkfdJGbfzkah75tArmrruM1fdGQ8dvVd2vbA43rzD62vC6RRd3ghNefmDCcgLcdQCfWU4WFq3TUtzwLy91wr",
  "key31": "iBdrWuTtGkNAtZhPpjDdqn3p59W7W4FXsVDLvAJ5C3vU8jaRHQkJPcW8etw6ZPovbSoUXpUPXddDoEk73PhKy8Z",
  "key32": "3Jh3Bqp18c4M2ifxGcHRSKfUzKrGwWtxtKFD84hAysn2AHC41XL56Hx4RaxLjutjxzoKEsheL6KUdsPPqCbVgRoy",
  "key33": "2tvKrWN22Fk7PiABTsmywbqb4adKU6QetpZQ8dJBkmdg7XKPSKRpKm1q8BzSVeEhoc2mKXUVmwaDs7fwVZeU6fxD",
  "key34": "5vphaaPq1GbZCY6KtMf84zFmrbSWdMTmQhbNY4BrFKfxWi49jGaJiakK3gVzK7BkKDduyWZFGEmnb9e91cBE5gRG",
  "key35": "55SFpSTxoaJLdfrAcZCHfY1FFc2HoD7TgKuVSpD8d5HpEt7VwyE33wneUvwCxUKDfn89rPtcL2oKGQbPX1oCbNZt",
  "key36": "83doeMuKV98uwGsFPovLVTibZbHtYRpsrCD1Y4xiWXfPjeAFDdmRKTtuejHbqsVkeD8J1WCAxVxK7aApFxgicPt",
  "key37": "63QhvzmGmqik5cemZJe63t5TTKFm6pFoHdnDsiFgXjsnCJnJrARKqsWpduiYUCgWD61z9NgD3AQ49H7NM5UAAV9S",
  "key38": "3XtPYnh2CJtuwRD9jsaXMBFbyGNsc2PA4zTLpZtbbfZPPx8yyK2fPZUSRDWDaGm5SDQaak4RouADsRLxvedoiwXC",
  "key39": "3JkgJ8xSVhHmzpDvXSFAFes7xANYr9oibjToRxWmfvmnWSUsmeGT9izsoshnz78Bb9ayyN6xAd2zxeg4nvP2ie4f",
  "key40": "5qHundYVZnaZfTpUCTVWBrnoayJdZrFBvicgGkn2QVjvAVhRaKhAXMcC8XoS1rxQHG4sM4QykdpswfsA4SX82ed3",
  "key41": "3N66m9cfAaog5gb5os93tFRQs3fM23Jb5miqzDex9PN7M31rJjbytMDZQjLKHkpCrtGzJMfeCkcgFF8uoxPxqoUX"
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
