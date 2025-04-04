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
    "3J9Nf89qWPc61dMKWzhbsCNgpZWEKyH6PTfTQGvptfrUy7qAF5CBzdwi8WtWkZXWUnS88Sot3WoMe9xJPeKinA2M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4g5Wvk72891icnw8LLza43esMefDZKjeef4RasLdaQCCkNgtucMizhgSenCwoGJwnvo4hY9mLuZiKyoM1UTGceBL",
  "key1": "2L5onXAuFKbf81VhU9uxXcm7RBhyH2F7EKcWafUoi6REBnLMMNM6Yq9iwpeC8M4w5wrMAXx1WBokrro8ihdhPbnY",
  "key2": "K1wf2DPaod1VeqLDQq128uK4Uw2BLgqKJKm79FHNhiiZTa1A4D6EkvTbZvTuU6SDtK3ZDHBKSe9p6BvzkNjHL1C",
  "key3": "31LmUaMw1xG8HfjwrPiMepnpFzN6C3qCukYVXKf1KRBC9YEF1x8yDgJX3emfBJmoQvynCMZgW7xPZtqNsmVkCJra",
  "key4": "4THckvK2Gq5j9iczXSrkhVKotXBULw423skhf5hXaGqGMFWQGnSbUWwUabhCGMjavVBe4kEiKsTwWXMKLVn8LGt8",
  "key5": "5nrKSkWUMdhVfaNepisEbQh2xJVMroVSfkp7szVknsd4qW6sLt7eQ5NXq5kZRmJa3dUFHfDCQui2xT92hSfo4Ujp",
  "key6": "5QWF1e2TSutM1At7aRG9iBnj7sjXkqXdtYWyxgnRmHrn9eZ8F939urFVzsdNVgqFLciYFQavsycdCPWDgRUVJnoB",
  "key7": "QWjHsUMhyYoSEU4dWKt3VhALA3bjCTwd3Bg1wSMPxzBXZdAsXYe6UX2tGxU13EtvByC6PfxYhBwpRDw8VCBADmf",
  "key8": "36mRr4PoJWDgThJww3rpdNHdLpHsj3RyeqYg6eeEzwyhFJCmQdEATUzNqk3WbMyFBTAu2PYjvmww1jqYCM9MStoF",
  "key9": "3MRBefuiLzrYypgNbSvQ1p4GqhtN3xZQ9qkuy7UPkn3KraiS32hkYtJ8MHdTC1HK4bgUjvN2YywcfpUoW9f7CyVs",
  "key10": "MtZDmJpy9NQXXmZqraqcdM759A3W63qqZU3NvY395wutiMU641vo14CVdqstVBJovvtR8iP9n8UG8Z3hnxFvSZR",
  "key11": "2FWb4Pk4eNtxFT69aKbQj1eTGxD7L4pwv6dPHUZb5CJ7mfHSJ2DeiBKM8KrGBUqetEbxThgbuCtUMihCXefDyB3S",
  "key12": "5NU65XXVmft395cacApynmkyun3MX9DLZf8ujvwsNmKEZfSDpvHqeHkGddbFxa7M8ZzbQAZNqHU2638fbbnAjT2n",
  "key13": "bRswATcSFqGLC12zmKghpKr9YmbyNCvvH7qr4c4UvuHF8qma4QWo59QZj8yBYpEUg37oaBcCgBiXxssLdJ9PN8D",
  "key14": "2hotcbnEEA52HmVjzNiqvn5XwY4wVTvSEUvVUSPsbD2V261zTV1GHWhzjwp7v38Q1G41cvt3E2an7BahF8Tny2qa",
  "key15": "3TNGYN3BB2rb3CKyE1qbYpw3X7QJ95LZbXjbxyuHh7fYPLfkziBL2hvk1oCMdfEshwdvfxT7naHvkB55iDmZWFts",
  "key16": "61qossFiR4eMvNYc33o2q5AnP7bdGGBi8P5ArKY79sgpRenqzsNT9oAv65YpnSsHZLUZzD126T1M5knZNrG7GTkJ",
  "key17": "2MwLYLZKR1m82jewnnhphnx3mWMENc2LMPpbHarCy5YNe7J9NnLtNsW8gKUQ9kZESuCoaKuiVBPAgUaRyq7oxTnG",
  "key18": "5Ud48NH3Jrk16Pq3nc9bgMKQVHSPWKtXx973TCsVSUZAbaY35Sp9TZAr456PnkdDGHh1ye43YGEKRRTJ6uix2FQi",
  "key19": "2mo8KBKkR3B4tVnZoxbykMi5Ln19tLZLFycck482FWsG8fu231u3FXTeNY6scRRktNu3V6JYLfpsFdquk3sKcYtn",
  "key20": "4qkSwk7Tw2uyqDe4bh3BnFVhLzmvXiABGJipNPbsTeNetwkvdXPyS8n4K1qBQXrtnatFmjqgY8mirUiAFbafCub7",
  "key21": "vr3VRb4AWLwAF2KsTBM8aXKARNXrKFkH1SJcE5HSpD8pxHBrg5DsiwLPNaagG3M8g63RKfgeRtthHdCV74BGDF9",
  "key22": "WBVPQLt45X6CkoVD8hYByuE3C3xMv496nx15swectagkbqZ5ePnJVRPKcG1d4YrUsDGFbPcTEd87MWZrJecbHhx",
  "key23": "4pLRUfSwULpPYj9RGnxXhiX3aGCgZZBy8Tsw1wkGWKntJ4c8bvyWzf6dtPyE3Df65XjjpsCb7Ehf7rXeKvPmWP2S",
  "key24": "5eg2wXgLTmM3NvgrQkazvPRezB1cMDTBLhC1N1WsQkEc4MkeFVCUu7HaSedVXZD4JKN8u7AMk7uqm9qqLkePcGC1",
  "key25": "5mncr9B7A3w2uWcFHAkxgcozCFCzgfsKBHCkwYKyNYebcBZ2Vb5pHNtvaDDJYB6mc7FFfoqi4cdkgmpBZ7wqStN1",
  "key26": "3ncXGrdnmL6EYwrt9QChVvFsBK4qi9x7vp2EnqX3fMPbMDDMmabn74s6pmNepPZso4r8rtRHj1NUEnrZoP1GsZuT",
  "key27": "2uMpGQU5eP2BcTHyGWzeVLoNQ2udzDvPt4WN3FLGBHA925RemkzwSGBMyyS7zJnjGN7ppgitfrHTE255J4TXX3V7",
  "key28": "3CWiA3yXwmD2VAjisJaJouPZ8w1X7ntf96h4m51ebJ3UwNXzbZZZSjuW1Zb5EZvehg5J5AmdDS2atfoxHvBEiv5K",
  "key29": "4iTQ6K3bPwLEct3mgEZbuUqHeM2UcGbTFNXNtCRsyYMePwahDMxmvKdR3YJqmm5TCYaKyvXg8bF75Tfifh7CCCtw",
  "key30": "rJEinHxU9ScaC36SnU6RQM7itLGRc7dUVncGmANjq5hCh3parqKkHWmw6UpMrc3qrdLTNmmXUo4vPoJbhKJ9s46",
  "key31": "TkgVRpw3vCWMbFMaBVn93uFYN1MXWTWqo2YFjdQZsmdtankNZTCaeTTS2x8hEbjPiUfiX2kU63waVfJw774ijgL",
  "key32": "5FGxy79yMBhuJtjRb3xTWwQNMtjyJtRVLK4i9aGjoo8qh6h7YEukrEX2mXYofWE94cuhvSq2phNsxXtwPvzJ7iBa",
  "key33": "2yvmaVuHPQYjyxhF8rmirDet6PYDjf5cH86eTeTRqk4SqAEeLMFpVMsfyZXpbumP2w1bbBmKLirJDNcoyuXaFKLz",
  "key34": "39YVdDgZXSFDzoY9ArbAGpro1xk4msaQfNF4vyR5GW8NFRmtpnE2mk6cLa2fKFyGnQuvMW7JcLjYuJiK9S5rXR8n",
  "key35": "6739RntEUmLNzRMq96xw3MyjCQ6fDMmFsd9FX1VRQdwTzVQLQ56N2kMC6mPN3viwYWPNsk2Tki5Zoz7oPdVChu3a",
  "key36": "3MJbHpzekYJisLt9AX4TVaH2i8mgmDnThpaZkH9JvNGYpq6Kw3C1ECEQo4MLUj4nK7Qwjr3Yi5hoEur8jNe1EN2n",
  "key37": "3yW2itgCwMoyWdRHuY2UMPpvLGFVka5Prw3GVYYxrNVtWyTRbn29YiVmBB6tP8UWTNwo9jthw7vdMk1Nmi17PecH",
  "key38": "23sy8oNJ3z1aJwNKaULmbs6D9xv7jqpV6X1V5DegBka1yADe2NMTxqE5FkGUtpS3a17mRfT1hwwLHjJ6twUTTfcg",
  "key39": "3sVYqvF1tymHWUPp3DwCzt3ezvPprJ4fEfhCNABp4L4oWVy7YyqXrGiTAan5AoXhqsgFwazzidZwqrn5ppS9Mq1L",
  "key40": "Xe1U9v9uzBa4855qHdCan2qKjXXokA9m8YggRxtnukhPu1Bm9Ghp5fjppK1SgVuSk2MwK88MpMXCmJcA4nf5Rhk",
  "key41": "58psqJqcM1ooDz8ZHRYFH2f7Eyfrbmz9NLUpmEfY6sspc599MZRgMr6y5zC7cWWthGQ1LFWN9N6jwkovveW6Tt7f",
  "key42": "1uvKv98ysoR23uGvnLcdMounJ9Lhzj1w3nwJJog3MCyo8x3kHYCBgckFYgp1w9KSXzSQhUpoxXpfPyFYdNAEUpN",
  "key43": "3KwuwLyLoZD44HQPgtDeSN92iKJ6iEW1phiwqtpcyhty8MQjG1vXaPTZxmFYyY7CWQqdMXF9gz7nHHVUJZubAyBP",
  "key44": "3MUmSczgeVRbP72sPACA5X3mveMXUKskDUHExuVbQwWmxTNKLtqxFG8pbRVPrhgrzPzf5b54H8yRostgF9QrNN8w",
  "key45": "5zD8ukgNcpMSffvKn4PgtuAdWB2DnMd9C8YXj9zP4b8pfQNH12fy6a7z4f5BtaZVkn4KNhqwKoovCTTPDTjZryMX",
  "key46": "jV4vdxYUCvu7uJu6TRAtMJvZEocAdEnBDBR2r3J3DEoMq11rmnyfBS8wczSauLywrRBMBkPHREDXFpyqNcyMw4L",
  "key47": "j9jsND8XvLDPYvZAHUKhHmLTFtinxcmA9yeQjLZZg2uUJBXDDqQNtuxsf1sw7tKzkb9NXy7z6yRUcSsU4r3qqUp",
  "key48": "2wqug2BfeNfp2cwWtMJ7G81FUmvtejCB65CCwKua5d4a5arynerRuoiZANMdDZj1gcEMmfqJiL8Hh7uzdqmu5YYq",
  "key49": "2ZHnV4xPGWmiNb2X2UezJ3JnyyaFZmpTtZbiCkTfwbLXZoEcKgNmU5Y56kifoV62AV75YeneMR6V2mw3noPEAu44"
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
