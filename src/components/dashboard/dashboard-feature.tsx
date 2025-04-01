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
    "5K1D61bsSPkXVPRSDnUiVR9i3oTUEqDPJZskgmCWmYWmW6HGRyzsZhWGt4h2qBotNPMCJv4CwnUjNp3Ds1rbmSM4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SCjFB4NvAH1pgLXc1mGDRwWp9B5N1hW7tR2F3qtLZkf81PzXTr4JQ3vsxE6vyqyKDbv8GnuPNtoALw61bMJmw2P",
  "key1": "2Uw8riWoTLVVfqxQxFaDKWonMDPxSsHvVDxhsGQDzyriZkU1w86xr98xnaG92iPszFAtaZCdYp56JUYdPTC5SGnY",
  "key2": "4VqaiUkiXkd1pSsSdUjn5yoXHPBruaM4KUCKyJAW2EQYM2seDza8wg71kSHfr1ySf2gAm4qPdhXWSiRnP2Ebu3ZS",
  "key3": "3P3KLMmTNEQmQ9eWoxt8zNLkBBRx4XbZHRQFy2rofy4jd6CJHziEvD2QYzP2J7NX5VTvkBXKdyPUZdxFJV8Kjx83",
  "key4": "3Efq8Hs2L6dPmSfEtrcBvUD3EsiUmvm9dDvRjLqMM4EsUa8XyjztFgudzwieTARnVAJJ52nJWY3Xew4mcWd2wxk4",
  "key5": "aMZ4s4YuKNMazfv1NfnuxhAZD2pE8MaQLxeJgRmSajtUntmmSsfYxyVHUza52V6hgWz7bgtb6PXsTVwCPXAkksC",
  "key6": "5pdMfPfJ7QmZJMR3TS9cSReba3fabqNcVXBzFkPgcGi2UsEjuaKmxrn5hpkYJXeHPuea1qq6LbmQ71sRR4rSciys",
  "key7": "2p5zQrdGEvkYvB5AFKnrKw3LDgJ7S9ZXHgGaqFruDoFJZ8LtZ4a39JNkMi9wk3eJBz9zU5YrSHZJg7QcgyVyUFQ8",
  "key8": "53x1DjnZSgSjLXWtwLVRbzWK8ao5cr5fGBTwmJZ3GNCzshXLJJ6mMRqXb5asQXCvYxp47bqrUeh68vQs6ER52xYJ",
  "key9": "6296HAt9FVLbLi4YPTv2C8RMzTYFPHyBwxWPGR9ZoJAoMsSRHifJb5nXEx85vxPrnhrQ6WFmazhPQff6xEVxG9yR",
  "key10": "4B2vsARtVs4MyJiSy2h5KFTZiYXrzuRV62A4we2J7Yh1nZ2Ku1r8JrtkyHvPicifSNFSkEmYENmB8YJ71t9twd2J",
  "key11": "4cwXJctdQstm9yGUPASZHMpMSdPrpzBsf74hg2et4yRABmXKmSHyFZAJCtQRQotWRbUZKRCQzfxQfMcrRrqPQb4s",
  "key12": "4RKxrZ5BxmZBShXjoEP8prZQvAYNeE8kkStZAkk156gLq2wGEuZqzbcvrruZc9FuL7D3UZ4fxMEHR5BX4DdzixW2",
  "key13": "4LEbiJsyfSFvvtUxRYmfrNcEkpeXdvGHUp8FuEJcfovDaqm8zPAjxgbY5HW1nW6tXZxMPE38MNbVzcT28RkrRoaz",
  "key14": "4vH9raZ1ATdAt68teui2wkz5q1CjJUWKau8tHucSUjtVWPXa3jptRLL85YhGewBju8AmRiZbGZDJiRNDg8b7C9xX",
  "key15": "2j1cTfVvyG7G8DTYNBP59Rtc4S8UsNiJC7sE6DZhShRybHt1QRPF5TghZ2xoyVemstKnEqL1dSuEqtrD3d8cNt1s",
  "key16": "3LdT77xcPcriLGH5M5dgxL4qmWQczSTEtMdaiXk3uk9CC3NAnArDm462iK6uDEUTxWBiozFL7jPeXFta6C4wirNh",
  "key17": "37ESDodk72pcTpoYG9SKUXsKS1Lh4EcVs9ZeX6CxNShEQU9HRUCpuej8WmqADDrU3AXv47YdJmBw6PAJAx9NDTym",
  "key18": "4TUaKFwhsH8XxFNWGpbWhBADfbkmgJMq7eu8GWVjrLAJ159aQY22E9bs3MYG89Js6ENZy2gA9WERy9XJQqs9yaJ5",
  "key19": "35USEhmG6rMupDzymJCcKz9tPr8NsYMdd3Z72e2Fz5SeogYFkrimjSFRk1ySKMpoLUaAmFYjuJ84My6ERs1UeR2L",
  "key20": "47zZMQCFrrguaZJ6r29DfjkB9ibPo3mjdYon3Fsu5m5fCNx8XgcgU767km4YeuH6H2xb8QV4AjQjQSGCrDLYpp7X",
  "key21": "3BsMuYaDyECp8RhWAqU7hQb4K59HGNJweavDjKSsuGP5FdfhA3avbe2FPiC28fxfmKSEVDY3T9hY3TcEqQyRDH2F",
  "key22": "2uhRMgiCp6poe7zM7Afv5wPmApL8dET7C6XKz3wiUdLmzKtexoSFzLWo6ZqLPg3PAtk2GSjkczXx6yuUFUQ4a13w",
  "key23": "2GDo8yQVrV52BrhAMzGZNk5yBMRHXmiHUNysV9gCfUibcX9yV3L3yAeDoJnoxDvzJnMSHkXUnncwRGfzN9keySj",
  "key24": "5XBjVqxCkCgKW4u5zjTfWUYycxMT285nfURRX69yBhad5WAS7tSgfv5abkGUJQhtTm85bVqR5LGkHm5Vr1wQqV8r",
  "key25": "3YSkXpLsNa1B8r8rvTLVyDrnbNSWiHknLB8ymCiSupEHrAuruJxyqe8Dv8ofrSm4dgB5a9VBFwjHkNtUf3VfpG7H",
  "key26": "4ntYzosqUJeEKbzdPUejB6r41yA2pQ82pjRcZdXGqBVvyxGjnQE7AtthMGVmb2RoY49eRZucbHyFxrqdNUcRP1PG"
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
