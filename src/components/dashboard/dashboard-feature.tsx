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
    "2U9BLEtM3UXnBPb7Bm65kGDvgkL7w91qTzJAGAYa4iYM6bykCfFKD1rUDpNyo5Htcfzag3qznEZXMS5rSqX7m63d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uB4qLaQnSuG4TiJfQReE6iP5ueLjGNsTqdwnEcegp3v97wwRH6i6zfxEyZ7zpTiaVkZ4UzuCJKJmwuURtMrji6z",
  "key1": "3vJDLnFuQdZ2qF2xh9X1VDWeqVSF2hcibrRn7XdSrSZ41HR6wq3DuTWQbVCeaJBKJAwRzwqvtbeB9WrZgvjhPDRF",
  "key2": "49udpzqybmmbiz5ExYuAkhRngAe9u93q1edsVFbrfu8qPjKTXfXd2oVPtCgEumRGgNz35eY4yHAR1ZSGn41TE5cS",
  "key3": "1bysD5zgxXjx6dMbnc82T3xSPRLM72BfnmJtb1xMK3qaSLZtQkWCk6eGK4PcvLGwtM66sTqcv2fRtQGAUa3W27L",
  "key4": "Dqf7WL1iiUtHSXYSNYbTJKub2HtX29Y3VSfzKxectsXewoS3czD3h1yJWLiYMx4RpQMafqwkzKmHPLKAVaCYw8d",
  "key5": "4qUhY2UJDLaPhFAFjzmPFBhXwecVSHxpowriraQc7q42PPsrcfQdv9G37UHa5ZyuDiPybUGZbzzHnEE1itRV1ZVA",
  "key6": "3fUkkqBKNt1VJ5sqXguzVgmR15uFfDyTfBGEKHnNxBdjWdZuq32dEkXykpEqustW8TZxYohZkybZY97nUJMThEnQ",
  "key7": "65nZURsNi3r3WhkStT1XvHfkUvoCLT95TbxN6q6tJwsYbjnHzQoxeg5T23aZ93tYUjAwhJRaDGtL7mmrjT8bbTiA",
  "key8": "3PUGZ3qT9Fq4jxXuWh9ZgTxozdH2rVCjsF4VTSenfdXGsYQoBGZ93rKnzYyFDSZRKLnPTRCan67kZzWYVnsib4Ei",
  "key9": "NbG5HKz9yV6vKZ4smCuKrRm1aGAcvcSUAxnZWTDr9ArPKVV6Mdrw33GKKxfMp8SN34LTVwrcur1kp45PP33oiBx",
  "key10": "3bQAoSty73KQWgfTByfABXWvTfdR8jHWezBtDeM16dQUabR2gpZ4KUaiNPC63jH6GeWC2Grwx9pxmj6XDNbyQjv9",
  "key11": "3xNXDTLJmLaiqGsMBouHZzRB2FEXpdTDDqNRTATCdB52EBhkrbf1PDGmPAU6847vTJUnaQ774suA5H1t4fE9Efe9",
  "key12": "5FZUBwE3Amf53iauWXbfayKvauG1ZgQtwcdAdRbdnTA4RQNm6u5AW4RvhtUqkBXna8YMZEt5HHaCeSmnoeuVtCeV",
  "key13": "3PU4d8V8yjBNvtxGu7ES2T5M5mn2ZjHnrLc6rTRN2XAUjgyBneBumA1MFQQw55Bsp2R5sBgJkP6dKw1eWgfxMZF6",
  "key14": "2HjfZ3pFFkL6aLdLJ1cXCGLeqF474mK1nie98VyT7VpvFeYmagM3uhbRZKtZnpTGtQHhZvd2E9mpT5UDgEd6CnGx",
  "key15": "3KhUvwSuySvpX7vVvLqY62iX69AJMncfrZNhL4wRue4gU5VmJAwCjrYFc9cdfehC4iZDjqwUpJKfCpj8brzBFrk5",
  "key16": "3oAuhceRjQ88ih2GPtEBA71J3pcpFWn715QwnCGfJ2BtTY8JLacVtZQzMcy1kagho9nVjCWEEJKapotRpN4m4C8c",
  "key17": "3HPk17aPw8FRaxdGye9DHqTunT2CdKgJgh3F48NREMAmLLLGb6BEr4ZwP7dzMGDQpiTzW7CYgLq11EmCtEGBDUG3",
  "key18": "5FkXKi3kYFFWgKbNVkCQY6XeSCaWogXqny8GsVBkKNMu9LdSD9UYCe3QiJqjWwu6qGLyNqAzJLuaLd4vg6dViLXi",
  "key19": "5zsxshjhyjdFcroMEu5PdvpX8aEUJyN1XoSsYcwbN9AcJ28EdE9UWXUyjAyDnm2TG9H7LFwkvW9NNXNfdybcT1Wd",
  "key20": "44kwhrN1gRGVtynjDod5cdY1GUfSYDuKcat8bpwhNqH1r5kfhtXB6rLVUkraWav34PRUpLrBDVNXRD9BpiAJL8DT",
  "key21": "2jbLFTmSBEzampg97YCaWNcAwMVjbNCMiAmNekLBc1BDzPpmKJH9D3eeJRGvKTMCgALhnDTf9pXSqnCVEC6kG6US",
  "key22": "F44sYPLYDNSApVCQQuZRhwA1xrSZEgvYeqAdAB6bCHKpkqS3wy6tnfiqna5R1bSxXHjacnSs49NP1xXuBoCR5Ro",
  "key23": "22vP1hWv9iTD8ZUMn6xzdfQ77LjDB1At3g3NTcNkQxs6Lzg1SbtKYtVBPotMjHtXYaW5Lu6HsTHuUzkWMsYd8tWn",
  "key24": "3dXg8XG52uCX8BMv1YJtdyyeKHzNoioiKxsyfNHfNtGZGjhjfsDJ1zgxtTuNY3kx2nDsa4sxwDLM4EkS3Lg3KZGw",
  "key25": "3wJDk1La8zzpsJhUbPJkJcASQZncnU48grrJoHtoEFUqLSX98YzyLPtfZ5JUfqrozsz9QJjQ1CRLhmryTTUPssmN",
  "key26": "4idEjfhZEkaPYV1fprb86uLFJXQixPrvMrGsMxBoM2h7sHw1CQjAL6du3Httd2FkCribBSnjAGTSYDZzwtQdLyao",
  "key27": "32A54kBXw6hceJ9KoeYxFBjJ3GeWXnJeFvxWNoV9GSgCamGtRnfREjXdJb9h5qoEA7b4yYoyBvQt3MStPuYU5ML2",
  "key28": "4mvtyfmikWM1KGJnidBQ3yYC96RqEGeKH7dFPRsnaERSPh9Z3gZy41yeiau7jxpvBefHB2oJfvTAZTHJDdMGNqTM",
  "key29": "5D2f3RKdSqL67C1BvaEWR8EcZkqb1QYFozGMBLbCvuZURkTsSnu9WFnn4ZWYUCTADinNcVXh7y5ELmCaqg2WhxWY",
  "key30": "5Spdm1EJ2uwwTrWk8uieWkrg4QxZFgAboMjbTfuFtQXiWwum3usAx7FLCULY7GEkUQUaM9i2rQrG7jTa1jhEVMTC"
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
