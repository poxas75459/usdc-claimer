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
    "5sxVYQ9RBFF8W6SWjPwEGXK8uP8rBM82gQw7gk6Ebw1EAxihQeoXJaTETXXmRKHzpAgnWbHopUM7USzhAQmFytk3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Ky8T7mGN1gpWUSwgcJQbwJPn3T1j1VQSgseExupN9XhodhPPHxgYGQJ7dyWGBRxRReu2aZ6YQSrkSLj7AorTw6m",
  "key1": "5C4FPQuwnBU5weFfuKU96fWYGnKWWEamUauLE3SU9yCDxJPE2MkNN93mV9C2eXkGstRHPE5tMDWcpAQULS6qQ5AX",
  "key2": "5UC5t64ipdGjbTwTH4m3AT2dCN1mBijzwF2RMpqM4ZKJcQT1xGRxBf99XhhKZuaabKhvgCucz4N8e7hTS5ugC822",
  "key3": "4ytWXw35ytapRbThLR9fTMahV6uVoG43Bu5ATrbgyvypBdaexRytyaL2PRMLFdbLRrNkqWB3PnthzVB1A32Q92XD",
  "key4": "4oJwDRtMhHc1c3CTTSa6Lt6HmmLYK8ijVG3F2GAtQqeTyVmjpxn9xNiRg65P6aQoWiB1ifughwtuFtFcro5pEMb8",
  "key5": "5RuKb5AK8WwcFK5uSyyMsWdBxZ1Rih5894NRkwYbqTmNb5p77Cno73UWaFgJdeiDky5df2XSorcEXQA4g6Dtfp43",
  "key6": "3G1MSBwY47aySkY2RnPL5W4pUbmtdnDaarpFLYmpNS5pnA7AJ4vSF6GiYJGn2UMLxfTyBdsW2qpEQDWprpLoUVdC",
  "key7": "M383VZt9SKq8QMYebzFrvrHdGhWmbBSaGRYt1GGzfrZDXFvQfvNQQf35S3Bvw9nnm3EH1bNhDDrPLbqspkX6caf",
  "key8": "DDButzcFsxqG131Keb5MpRfoHpHvcXYGttYkxW4HqHqsGCDT192R6sd8xsTpd2c549oeSZpuCtpwLJT4zuAik29",
  "key9": "4GGFBFASawtQorRkKpJiAXvrpemacKRPXFBgQzzdfGeiC6o54m26yuFY9NWkLVQnuUkERmxqxG49m2953BEed5EJ",
  "key10": "dsAY3W4EPLb6KsEBY159CPrXVCPA6HGfXZsmKac5HB56pTu8ir2Uu7YyTyzidu9sjavwEg6D9nr84WqNf43bTaG",
  "key11": "FsxpePATWbG3Kz9u9AutK9jxsFbvpjZRgudKkY2wrcmHrTSyVruRQ8TEiEijLU51ZQFUp9ASZTV19aGTXhrK6Gr",
  "key12": "UMJemyPTYkccVijdFVFetBN8Y953MNVbDGhuNaKtDEHCCucNyr94cE6ewbiYy4jGFXGx1QtpJ2nJkTdmJfLVYPS",
  "key13": "4HSaVSjjNQwwTiHugRG3Wwdy7vZfx3Kur1QYfF2CVX6BRJ9nTDnpDfZVZwNFbp9yLVaTzgB5SvJj5oDrTS9kpSqf",
  "key14": "2hourFvNnKkPFMJwoZfA64Xhepy5atxhEFrvFZpHtRyXYqSWt1gFCkvyyQXGAdAfshEtQvLV793nAtkCPx6vWYHY",
  "key15": "5oNiN8i7eak9QawDehKg8AVN7Eu5fkALh5784wi6dkhnd6gfd2LTZLXiLrV8vAZkeVLcuP2xouE6RhrbDCqzygXj",
  "key16": "5BjtrCxks37CHHZr1dktZavRaNrTsSEvMDHGJQbr3XkBfKEsvr7hh1AmzqbF1vYdn1z7WXVEZ55xxcAPHAdzup4B",
  "key17": "wY67o6fuQqfdP4h3L6iWZBEKuW5ZyFLtZWAPAVctwZy4UQT673kEKJvKiAUL8kqQG5xY42KqJtgiNW5nd3nw7f1",
  "key18": "3dyPpmtyJRT22MTjckpeezb7rY8TJTfaEYVccgfjkGqm8nqa67vfF7rjjVZ8tgkHPBAt2p2rGpYmrxjUfPz3iiZv",
  "key19": "3CfZ4sagA3U5aKFB585hwP7ZmJHW2MQzMHGK58tYF5xVW33wS9ftwbJhL4MzUWgkMEuELLCrpovTtAyPHd9HwZoP",
  "key20": "5bbSNVoQiLx4z2YJqQLYS443kupmFv4He5zEN5fGgQ52u6adzzjgtQHFMqkgrngtqAnMBVvo2KnyCTawbRox7fge",
  "key21": "3HpjsAoAGaiauaGZcTqSMzsQf3b3r3BGBmmxF6DA6V3efxqGMyKH6fz22RzVkBtCEcCjkhPzWxaVJ9sEQm2PrinM",
  "key22": "3FGKDRdXDcTKegURArYDVLtfLJjPVBTPP5JpwCBL4NLwHinNmvyf6uvmnCNDgdgytXFb2VuLvdryhtRCCSSuafim",
  "key23": "3bWpWHawMF6zWtyFdNAQ5uxTa2bCG49jUiEMpP1jkHXU5PUgE3czijEPSbSavkhpVXhXMVPS9B85RtnrvHWRn8rw",
  "key24": "5BWfPmHA9PcSbA3smCN6WfC4hWGnYTQEvt7iBp8UcVnucy2m9jshs6YFu9u84tCRVwrVnWebdx4ATXZtrzoQutj3",
  "key25": "4F7Mjg3wbCEkfKbczVE4quejn6uwjStHrMMUckM28CiVQ4VurQ4s9GkB428i2uh3vLiSNGVQC9wkkd6uxV3JWX9H",
  "key26": "2j7TXscXWvdzfUfb6M11ZktSLxAecYRgWbVyU12qaAGMFzpFkYverBFMGQZAewbd9d8zUrH8ToKUJeFc3fbEML2Z",
  "key27": "2ddEkPaM5p5Xi1wb3t1mninTa37UhLii4V82CLo2F1Ww7gGZVjQo4SaA1Z5CW8gavW8wcUjH9c6S5CBFm6QuyQic",
  "key28": "5JTg9z71h7C4D6PDjot3SVVEXUY3iSiPP5Wnx56uwrfzjy3stiM68LitJYxuGA5Fd3XNY1zWKtE9AcmAbA4WySFC",
  "key29": "8ieeHTFrkrgNNPCobPn294qRPLxX4JcrqNC3XriSwRMq6CGU6uJdWyqtj3voWxAYT2YfAz5ptqt6zakdDtsKnRF",
  "key30": "FkN3gwrL9dswcNJfv4kJXtZGEJHUTUg1H8hBHrHr1tAx7HXNkQgtjccoPjVynCfpWA6mCMe5dKamRGf3A9a3G1w",
  "key31": "5TLRNMmD5i4EwKJFv9wipPot9ymiqHXFUChbKFQuc5Weu4GcU5ijVf8LzTHGqNcUXiPV8QAZmPSFCdNH8fVaEzGe",
  "key32": "4u72HJ6TYzBzE3UijH1hHoXj8A7gd7rDmPUEUJhDjFvrMkTfEZzsHgGbNAJSrxKNJGNBpoYecQbrCGJMkqPiHtCb",
  "key33": "2UnXMeYJohmuTwhQZ7ypb6q67PAMcHx5uVFEzrBAzURCP8JkoPpKvwWtgNryZ1AxxgfWKJan8RDo6Wg271vDsGix",
  "key34": "2cLjiD9f9zsfoyjowWXvnsWGMRCSmn1tifqEYmZaHfKyAeLEWDAX9F954ZhKsxkKpz9WfPaM8c8E8CXBz9k2NPkJ",
  "key35": "5sjjwwaoidfnCavvKgaoWy8W4LPzgJFuTfFdfQF4VVtNCtiwyzVQjLwz8Fxwy9xzR4x3Tab6zwQYhtVsWoGE2R8t",
  "key36": "2ch4YfNQJd7iHYNy6B6DiU5YXJ3Kh3Tv1wJj6cDHo4K37STzVoFTqScKmBHqE9368NKkd596jcUYcE7zp8NqaenY",
  "key37": "3MMQJQ4kZyVedRHQGBj9Gz1qm97iiNRQbWxEL98kJviTAyap6CBCaVzdyanpHUeCDPa2QtLZf3hQLWhFbyfjgRgf"
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
