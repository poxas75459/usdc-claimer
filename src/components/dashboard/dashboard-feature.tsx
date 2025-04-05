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
    "65PDK3e2WDUoB84MJSnb5eTgw3H8vNQGVAAopC2SKfBfFgndDgm2P8ANPZEBYzxbrza5dDuXkguNDwwsSQ3UNK4f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oDLUmcuFFmaXR8R8Uf75Z5Ay7M4yD5KZ8zDVAoyUj5i1g37HP6Fw5vxNhYkqWYYLLYiodzVuNKx5YZsV7T4PnAu",
  "key1": "5RiQpt6oEiyBhehdvKdDQUY3GudAsJP6oARTsBDwET2dF5h4NKQULRMUZ7GMVz3BALGE8CnBnKzzLg9CczyoSaX4",
  "key2": "5kfB2bm8zFHvZDkgAbjwMiK2wLJwbfK6AKdgCWgXQ6UvsU3UEcRL1KGorvSnzoqYF6BwvL7gosbbRPMA3iiBkno2",
  "key3": "46heSLYhvFst1BHrs4kXRV7QzHspBHMQcSTreesJfEcJMdXynGSDuzUGZXKyhefYUfbmNoqsB72MdzvW7KHi1QS4",
  "key4": "xH44Kt41DTC3RsvApPQraPpncb6xRLVj83wUGFoyeECLBrJrNtvy6WmaPcZFUEX7K1FVGsNZ7jiXXXvJkwjeaff",
  "key5": "WsWZjCxme7AYLhAk6eq4N3Qi4NnJN2rdnXiQ1F9D6oPbujLD63zkKCXtP3Emghhq9eeJHVzzS5vxUR9UfPyzZY8",
  "key6": "mFTeBzVLQQMwQozCLCZudimmUfA1Vuru1mKw1PvvcEexahvUvm58WufCg1oDk3q4EaHuqdwoWCDi3B38dChgjQw",
  "key7": "2XJkgzf5dwNXtqzg3Lz41XMVzyUAUNjUXqUczg3H7EDXd6fpbPvsfM6uNsPamc3K4KsWwv31Lb3JmRsZjuByP2vc",
  "key8": "4DW6xg6MvHRF8PeBMcF8nBctpouVReKRQta6wFDtZDNcKxosSt2ELCzN2hGaSCrSogs7xYFjcoCaRXbtkY6LnP5D",
  "key9": "4gsW8o6vfD3UV5dqGjCBWj7Y5UrVVtxEZHSW4ByftZNMUVw9WCHy5eURKKZExx1yF8VvP1C5TkH6apvE1XANKMbj",
  "key10": "WmHCFqS2HWuAUsaotgrxMeizNvBLvtU5ArJYtbJHmFUwimmELULZX6PtWFr8J68ZqJDsekG3Azq2hf9JK28ZBZA",
  "key11": "28oxv33tyamARXxYsDKTDajt6r4ahKXJKxWEFVrBZQBAG5HRZeqQavPdvPG7E8ZvJxPB9WAsoKwd8SKhjRGKyCia",
  "key12": "2eK8cS82bMcbUH7AvuneffupXyFzR6oPW2kS3apykpZT7PqnTyDuGU47f7pKRJ2GyF7g9m69566naMgAztDGJEqp",
  "key13": "5Sv3DD4TotMYfTRnARx4SiRMBosaSF6K39RWSr3EdpcN5wDD9RUzXfD9U3duh69ksbbQfn8xo3oxXutk1FFwSmY2",
  "key14": "2CYuYcXNJx6kjp4waq1jk8pbSxLX3pNJJh93fiWmR2Cc2CE4XkF3xbBQeoXjSaN82vDHsbMmhgycR7TLR1rvPC1i",
  "key15": "5Tce9J5YKLeJebLHHXqEfYQkEXHuH7bPxN1ZR8MQMiGHYamXGooNViRuY5mv51s8Jjwx2doNM2qiE3b8CpgDMxpd",
  "key16": "5kano5TR4uikwUcZD6VN6yHr5mYoYoAyoufnSiJBCZewu9wDt4hQpui3Xw6UfjPhJYqSSbGh5pzQ81mtrcKnqDrq",
  "key17": "5AN1r1KYSL8gbcNNfSDgoT1iSRwtAit1TJtg9r14eYvSmuh73s8iGwSrcqa4836fgBZHFdnxukj3PPVo2ynGfBu7",
  "key18": "4STM32FhoF3fzxoxWUmVYLHeiuqAVXztArfBSWC7KmnUPAQXH3E8U8aqn9b6n5Lm1abkNbqoSffibp2eSSmNwquP",
  "key19": "3rvyKhFD8CbckcMm7nyeFWVb7AEvjPwFSMxUEYgo65HYNKTFnLS7Hc73URngibXsmr3LSC59CmTmetPurjE9ywP7",
  "key20": "3Zn2oi5w6QccwfVqUuY1YbePrTJs18Ckv2Vs5RcBPSR85EcSa56cTcdLMimADnSCX5gewQxkcpn7XPHPSDVdFdpo",
  "key21": "HmJnySGvfKgoM6mAkb72d2NUgNByFw8xbaQVkNT7DbU951y8vKoGw71VupThjyz1DrnsFRujVPEPc8xpZna2hic",
  "key22": "3AW5nh7z2x2hHu2EUdhKPdqsaRiyCi9FaoBo3X68LhHaZuAkUBUzKejPiL4PP7JbSzXQJGgBGvYuuHpausDLd6dA",
  "key23": "3dMUjbd8TpEF7GkjENAu4qKP96dUiK7JoneD1nNabpj2g5MJQak3kf5nCqKU88N5qjBhfp9mEnNFUVh5gctDdwCv",
  "key24": "5kZTzco3iefJtHMs52z1xh41qFDXUGo2hij8iNiNaNa4M5wMeGLvH84rxRk4JMNjD4FoSEUFs1uxN3C1Lvf7b5jf",
  "key25": "fucGGu6mp53XUWqX4jQbnmLNHDkDR1XUeEUY9XByNohTe1Hd7PPpziBfsgRTKj2wpHmnDVG7nLtAus7fY6Veh1e",
  "key26": "Vd3gMcYf2UZ2j7S1yoXN4K5TE77sjrKXaXTUjuw8e43XFsPe6pkVT4x6n1CPhKufQdr1fDNuHWKEFFWYEQPwbx7",
  "key27": "4qwWsMEtpDvp7kqdzTPpHae7Vmd1dcqX5Ti6XiqtpZasoKXBXg7SUDdMCQXTcG7Uzsps5EakqurdPZqnjHcmnv7B"
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
