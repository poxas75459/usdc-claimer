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
    "45H8x4gCRj9aC1RPG1xwGkMwMxn36srQys4bpMrJBPZNf9EEH43AyJfc1BbiKF6svS7NimXVmUqa8b74Xqjwoqyk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5me7VgHg17UizLAVsru5ZM6ENGeB2CFf4VHPjHQSVeGd6fxvShouJ3maLfPEGQDWwtrMvMQW7CCY4Js8GcBziw3y",
  "key1": "27h1FXB2CFXfcf8hGd9YyzSchxbFVQ1yXAcpsZMsc2L5fJwTcT9fPv5FvPj1KvAQxAmMFXFM2XxTGqsfWp4hMBxF",
  "key2": "61JBZ3tMwaPe6FWKPWCXByNSz78qLnJpzXKQZ23Y1njTMA5dAPsgqKZsmZM7ghRUEXUe9DRGPsu481pGseFsMUXf",
  "key3": "FLn4hxkNgBxVB3EayNG8WuUnJcpau9WWDwsm2f5svDxay5FohqmT2wcBrHMTN7oBkDciP6NDbQR2LBUmFe6cs3W",
  "key4": "6mPNmRXPDyARfPdkGakSdpKCWjwURTLQJjUXB1r9mYksTjXBcHxnY6nBvbhU5zcLRGxXRtTyjZHuTDP8kpSdLN9",
  "key5": "EN5cRUZUPdpkZXYQDjfr8Ps8joB8UPLtJ78bvz1rZ8T62M1gKcBsTMiuQvmdScdrBmAKjK1gNBoj8YjdFUDqiZv",
  "key6": "Rp9N2MkCkC3DrmoC9GbXxFVWLWcgJTmp4DTP4DtmxGGpEyzGhUdCEPgNP8Vsic4hsnNfrhRoxpWPkmvCXCf5LLo",
  "key7": "3DeP5Cno8yBUucXu3SaNsvouv1Gq2pydVCfyyknZ9931HyvCS8NFoQ4ciFHZiX39tPYuqSqVNtMYLH7ABEJdR1Hi",
  "key8": "oGnqQpu9zYDBB25nYidXEDbeENwSuN53iZC9tx7uCUBw2HibQF1Sm9RbmSaAz14YfsQdThnBgXs7CqFVhMzGrEg",
  "key9": "41Eafd3pFNStyFicvzWMhk8MitmC9JRcUb6oZ4Gj6Avy1o5nRcnVw6C27N2eFFV8x2f1vmXVLQmF2YP35Ejyp7DB",
  "key10": "2huEZ9eJHcHmf7cxddrrd66mD7qkM5fSQrQfTZFpd44p25cXYyvrMvWQo2t66X9kxExnBDiuoy6cJZuTE2mesqq8",
  "key11": "3v6uuYWaiQ1MuadmoFRA4VSXCVtbk3d6RGEw9t8UodnzHfQJzbNKEWRY8czFF3SrM8651TwrDTnPFWeBom6gsgoF",
  "key12": "5FvzSGVoLnAn3Y1AQFAaSgeX2RoudXKUpSem3yigeBGhHvg7cw6tJZpNaa6Jh4RrgVvnxvqgtLXYCZ3LyQNrDnYH",
  "key13": "24YxE3DM9YZfkRgqYhqHeaaLGjim3Z9fNwsxutJGRCkPt193br6TkCsdsysUi9bm7dQGwTGdPkjuoQEWuAmsbAEi",
  "key14": "3dD679P84fVLaJXPwkfrfN33MtY9k3vxQVwFqa4v994q1QeGjgzDqSierN98HcsXjCGX3v1hd9jg1BcubTAU6Rif",
  "key15": "jTnsAGHF84J6tcWTx7C8DVT5ftTch3KatHcqojHw45g3NHUTbaAyaLaKu2Uorwx8Ev483n5dk6q9gU2XS1j94r9",
  "key16": "4pXqipd2JV2nGpobbymzc6QCCDn49aEnTQ5weMXVDW9aXYtxzbSp2MfenwiQHs1vZPqi5DLwnwBEtKbULUsjTTiQ",
  "key17": "5jt9VfjP64R8NfyM1tfU3xhtQY2Tr1jW8PGc5vE1t1Sy6vuAcWryw7SFJCi5HzuFHy91BFQ9oYUUSzc8QYbuEUEv",
  "key18": "2SKapH4St3aXwu1cuUsMiYfR8JZCGqdioKMPbJrTdHo3Zo8K3feHJqmUy67GBM92cHnQwWCAE2biJ2XEgVhrB6TD",
  "key19": "471LYZWMSGktVMTuF7JE97rAcE89RKeWhecQ1gXCeMxvQUYA9azaEV6vgDWcu1XrYPJtT2y1hvQSPDPrgqexhWqF",
  "key20": "4RMcVmsCErXtmy8TCdFq5yATXwbyKCvwJjrsRRFmCxcwk4LgPYUDfks1vkpv6cmA7bHDGHjfkcmQZiMiCsWvFpiL",
  "key21": "2PyZGNFFPbBv8dqoEuLsnSkkBQA8TbNQmR1d46JvPZLHaeJbqihpGGvzUuCGxReKkJG7MCR63fVwSS6EuJBLAcNw",
  "key22": "4H5A9rJ1yGMrgofkEFbEfiwpQ1vLL6NX6WERmcd7CU21ZxYtarfwB5f1rewRi9DF9rPXMkWhrV66XjvgtoFoShtR",
  "key23": "5qPW9cfHxUWj63nzwEjSmpatDT67LNxPYXts14WEk6ofvNqtzHoZixEE8Y2xUJGbkJLGdAxs88x3QnB8yjvKfUXR",
  "key24": "EDj4DpnLxDUNYZTu2zSQGXaXgpfGQpThyBhtiWjQzg7v4SoU1z8hJ7y5wNoHdwysno4Bxmm72qAkyUmgLc3WE9m",
  "key25": "4K5uQhF9yg3g3inypgvLjXAiCnWN3Sna7YB2NY96fkaXrTc9WHDhPg2uojgWr5q3fZhacKSBSSbDxqfaGaUDbKrt",
  "key26": "3MMjvDAh1G7WB1uKR3n8sRCP8NMbA6SRs41DpjGjdV4DgjgzG5qA85EXfqVv8Y4dyha8ArLcskmUyqjDF3iRhB9b",
  "key27": "4mTU9z5czry4KS8nEUfxaDYukghWm5ab4uuePimyekTkZdh2fUELsAWZoavmCrCoCLDbQT9Gsy5fPeaCEuevQELj",
  "key28": "pme33VK6kjYQZDyAHmbVTMCWSD9KbKu8TUviiypwzCH5ng8sPJGXhfHFN42VXvTrRoQxoxPGzZ3LvgvPXtaDvTK",
  "key29": "5YiPLPMyx8vLpN3H8LDugX4H2qV6ZX2GmZszTW77o5aH6qdCT5WEQB5GDM7qAc7hsJD45SaUxPSxHdnN7i778PW4",
  "key30": "AUpDiM96PW6F7p6w3mTR8xjgjF6xmFQUxp9qwiPHz9ZFtHYXRhhuzLwk5VEhEW91ZW9zEv66NUybE8kTj6GYGKU",
  "key31": "3UxMTtAHK71ZZv4JKEAUTSy3QxpqAokW4QAn5hfYBSB52ajgEsZz3Bqtd5sJNjBRe9PZu3JEJSJExdo2YEHJ7xwZ",
  "key32": "2sVBnRXaMSsj34CEmruJZUoA2yLbSWWax8iEzrZ31QzDMqJSp2cKmjXJ8UjEUQhyqRay2hmECKQZzk3qajawoR4g",
  "key33": "5kit2MXZGH9v2y2xAkSNnhGPJLR1pFEND1Cu5kb6MV59QDDbF1p4eNm9z5xEDfMA5r23dPrDRUf1YyQ2YFf7Q7zm",
  "key34": "2dVtie7gaY6F3H8YBFTEdKkZZ32h6bwaEYWaG3a6jTqE2mjujWkpUGG3xGtQjMoevpNpkhuV1u95umBx6nXZ9eXq",
  "key35": "4mebmKGWH4DcU2AotkkrgrUWtUFW44rtJUpwbS9GK6LamCRgd1S5nAsXuLBwnEwro7uZdUemEJbdULST3Jf1ZAJF",
  "key36": "FKHprT168t5MhHS3sh8AgnLaEKLvsoDvqbBpoWH8vZAHWstPAkKSYungjnT9RagqnPtTXs58eYsJXYRhc89GnpM",
  "key37": "fqxPM6Acpuc4zxswtYWqGdMuEvyU6fu4Ky9cAU15MRnwNZRfNaGWTTRBFAwwbbS6g84LVgemrcU1AXmSwFMtnR4",
  "key38": "3VWevRKe1DGaYTRcsj5HUh2HnaU6pQeM7Erm9Ty3XDNDr6AmKFQvm4VJxwKNPiouhEUCibQcJBn1G8y6BNrQNin3",
  "key39": "58x8ZsZfsrv3BpUjHhgtusYe9yoWGsrFsYu8ctXBpH2wLaDh5qhmcpM8ZwYw98WKzMkjANKJnCB8YxWdGUVW2vmD",
  "key40": "UzGyd3uLJ9ob9KvPEVzY7ku1uc8vSZ1iu8Pg5sfnTaN9NjtC5stuCfqd8973hebSTuwFs5TpFiuJTHMurXLK56F",
  "key41": "44u4Z7mjrG1XXEoXvmqvTbryTvFprCeUE6e6agtEMrowLzoFEsJdgDcKmMPrMxmWG7BaMQyf5yiDDSYU1Lua6LVP",
  "key42": "5jAFbX4TTVgk1pGe9SnoQoPXbvbvuDJCdEpAMAdR3FmKAQbAKQ2fQBVqXtuDy77ML3rHuDmphQ4Z2oSMfhyRe1s5",
  "key43": "2udwMGdiNz7Gjk4d9CY49UEUSapG5cGz56rQNcCRtRMnfFpcFNVmPYySuJAgaksxt799dg6cDoFwSofzjoaqs8Rx",
  "key44": "5j6PSNyAWduaVUnqKaCUfSXoxBWPjq64XzShFQRHh4pJdFtoMUYJYDFZ9x4oUrgXGpY6brpQWsQEJc1Un2v1mmQb",
  "key45": "2k2BPjFZMbu5vqzqxHUqNpG51H4ZNp5xfh1ZF47irLBsauT3McCAcvyLjWp57qEobf71yWGVPPUKgM73dFnrekQV",
  "key46": "4SY4wZzaXyRMvvZ9k6y5DTsY7FHW6HXwUTUGGzdipoNHQXo7i7AqG3vAT27A1osGxY7Pee8RK1hK86Hz38hqGdUB",
  "key47": "1YLii4DZC6iWwQ7aZwTyD4JmjsYiiGLfD8WJB71RihKaHXdRCZxWkNab1GwBcSR4cmBJuEZXzX3HnXKjT1XBxue",
  "key48": "5jswaJTsp9tJnq1RZaCTEfm1unnA7e872bVrYDDQgWLM6ZegKt7A7yLKwz2hjSPmGNPzwws6kqfFXmbrGvwob3zk"
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
