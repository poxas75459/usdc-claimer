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
    "4bgukjq4nPCxBmUqa86aNVuNyTPMLied7BSZfRpJ4ZSpxTvemTv7ZkynwGJvLggyQm1XWMY6AGJg1cdsJaNqbC1S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4a8eU7C7bvVnLdaN7WJMVh26u7uUyLgn76G1mjqLXWaXFww2Zq17Rr8pnCuY9FyBq9fBSsu6stotqQrJixKKVG4p",
  "key1": "5ka7MSQ6XCHB9Ba16faYfxt3dt4DERZtFTZubMXMYcYjmnsHpQ1wBcx2tJ6rQwvcyocsqm3UhUgVrvea7CreYpgN",
  "key2": "59J536JuVcSt1ZHPexxn7jvpb2c2VWakbGQx2G6DMmweYf3PJGKji1PnNHhRsBRXnXQCcueHU4tf67VoqXUiawQL",
  "key3": "wB8YT545m5GdAhBVcP24g3LKHYSVxyCaKKYoVsSKeKMAemtLznFjYbL4Fjsh8ddKPGRYYVT9vUDps3862gTiHBb",
  "key4": "4ykcEBABu2K8F1VVAW2c6gnjfYeMfQXC6Tdmut532Mdw3iQkuLN67wzJzrCMbxJNXpdGYGw8wKdQzj1uWDk5JGTs",
  "key5": "YYLeWHUj8RGCwDji4nDuUZ8ixumgQdAsQcRhs98im2BkHnu2SCMobxapBVF1APRtt8u7XU5KanEsTqs67ATsZqR",
  "key6": "4JzfYXxGN2f3bmREJTnKM7dXrkV6g37iV95FbPYH5Nx3Jz6FV4z9ZQiaGVKupK8M4n8tJ85zT88ExB2aAXSgYBVg",
  "key7": "4GKsCRk1f7DUFKc4jHarQSY5e8MsGqM9vFQBWXH9iVGZNKqpGy3YnsCjTpKBGQjtLCEFzFYdMXRgwskiaedXLUFG",
  "key8": "5J8ePMkNmKNzGFRabHd5rE2mVixnQopVwVNesPFEpgiGwTPp7K4DdhRVThNwazwzj5hAPUvXD9XQxtsuymjYAFCU",
  "key9": "3LK8QNtdVp3bD574SNrT3t3kYy7t6eHkTXVb5yyXsPPBxiv37TH7wSaZDEQ6iBsmiD4dZQ2Mjr7DNvdrc8MAedAE",
  "key10": "4h8WZ4nZpDNLQUntsLju7meE2bhn53DuPNPju71rXZekegM4SJhxGeZ1TBsGBfuPF3BJAs3t5R7i4xV6uPhxPAmQ",
  "key11": "22gYbeLxs818GMyeNW6oKox8danz2eF31bo5L5NYbrxymXbVHZF4e82XTDMmE7cgobP3oKoY4x224Dv1VgasSvZb",
  "key12": "2LrxG6zn1hCdxgMyj7pzT5SuLsZX67VR9aM4VmAbdiXuV2pvhfe74WZG17ykaqB6iipVAmvCXpLJHaahb51Ucigo",
  "key13": "4EHtK1VEKHw693RWWvCX3hXH9ncmQUsBFUSCn472YBeSXJamqwSCz6Qu52zDk1uczMqXnV71FCpq9eHave3i7QDD",
  "key14": "4sgHstjFivJP4xWwbWx7G78iQxZSJcFJFKHvr644VstZnha7d3UrxkCmYNhvLVqkCFKXZxrZ8pAr6kVJqyJ73kpL",
  "key15": "2tqsUhNfhTYmiCUEqjQdwuQycWsjKCTV6MEZuoM7cCM5wiP4cri1Q5QYb9fpcnSRwjNuvVZLaqKWctZw6zR6ZXJA",
  "key16": "2vh558ZS1HaJWno9pus2cynZ3rgnHsXi3bHiCFabzLuQNaq7SHohD9NB1KQx2zhNtUDM1i1DkVKTnc3zJQHsUhJW",
  "key17": "2Y1CYz8nYsvx4KD3gyTNH2JyMmyyrCUPVJ73QREMrrv71XZn5cjQRe3UTaN6D1Hx6K4U82GAz2FTn3rNxqDoK9L8",
  "key18": "5TA3cgFNseX6zqsWSYQRaNErHSrXGGKbadKQTpzepcMMwqedvu7j4bAUVBdGbaHyFzYVTHZ9DfykratRtsGwidAb",
  "key19": "4JBLS4qyT8zX4TQ7gU1knb7ngpFPyCvG7t4yYrVAPEqzJGKnq88ZHoTX7ENLY7TvNrxTJubmLPebnijDBmbzTFC6",
  "key20": "2uCWdXv95N8RKB3oY41Go1mNdQu33UWKaCxqUxNr76pgybyCM6Sutv7bwT3vTwxw4yd4ZF4DKPFJA3YszkEpv2DC",
  "key21": "28meLdTuX2UuKP6VsXbCyifdqQ5Exax4an3RGzKfZmpjSa9zRnkVstJLhRNdftFJtwSWjCWixFfhVT42HvQhKCyD",
  "key22": "5aZDU3VyrA6H6RKE1TMcgviBdvgxwmiVD9bqhgn5ZPvcedC7KwWHyvdHcKfsiPAQKk56AQLaswNke5TtRfF5bspg",
  "key23": "5xUmqZxCdExegVBgr7ZbPnJK2Zn2XfUcAvohDTmijrVAkfxG3yJKU2ynerWmde2PVU8Q4rMRGPaFQyQqcxkRJThe",
  "key24": "4JWwU6EmofaGAZyCs5z5uf5xtirNzR4scr56eNbAmZkTTLtMf7YPpgsN7kosmBDvvcqZf94yVV8pnXejbvKSNLAY"
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
