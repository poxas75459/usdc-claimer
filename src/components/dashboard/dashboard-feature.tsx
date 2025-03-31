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
    "4PQCzsU4GE8UMpVVaRgSQ2yvpfXBXWLNFvrjsLfGqU999pUi8BViwuX56PmuVou4WGUkxQSnwfGqriTB5WhQh1dE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Nw5NFQDfzS5Nkk4ht6Zm8EDLuAqXFLfPTQA7KCDkRi2hnWDeWeKaV8Dnu9MfosxYz6HHEkjNTcwa8gc1kgTXWrY",
  "key1": "5Xr19XA4xmSdgVLq4m1NjzvmLczeEYiSGfPF55mZzjY8eZYbhc9nLqU19DwJRtGHU8GKjH9FbEjgfPJtnTkcJ74y",
  "key2": "4u1ePhHqaCKGcGwzucnbxarVmwZmErkKPjDWGcRKjXhXRiSUdJniZB8xCyEzaui3JcSUrXB1sRgfpZDWh76BeswJ",
  "key3": "3dxDvGRUZx6Vm5FDhgA7k4tiFCBXzau7LFYDuoyiqmYnCdK8LZB8eZNauDNgjQP3Ahq53zVeSfb5WrbtdoU4iEAm",
  "key4": "2X5EDNHGXhSAP1KmoYAFxqnTSQ6f3bWdocB3RxN3L4zE7kW1ifKGo8vwACUP4u48EcuVufJdhne9kc3oDrApuA55",
  "key5": "4JddqBZHYPMYjLruibeF9ZB5swC2FSmVHLvWf2sSGfbvjPzMbUHgjP3kcbS2J5cGi4KUWvcPZ6q5L4BxQ1h48i5c",
  "key6": "2D9FZogkG8hq58XAxnFpM7gUizYuFy2mCD3tQF5fRtCKqd5Y1qPAPhigwXiHDnFGjDoFzbpDoURYQ7bjBvp9Mnbm",
  "key7": "BpPF1g5vWeFhVStrRUuYp6snLJKyr4xDNmvHGxjkmQAfXL8CgmA4QdD1asnwrsy4HcVTy3A3A4ULzZcumWkubwr",
  "key8": "4vpX49S9cr2Y6gJoyi15HJnjm9GMopjjS4PgZuW89iQ4zMqWkf9Xb3TKQPB7Mz9oVnMJihHutgB5DAzQCqARdHSY",
  "key9": "4LwdmE3GVC5jRWRjyvaoCAsWko54uLbLQs6EAM15ZjtiTfhwBFbQkm7uHwPMrGcMW81g8MaDBwKqhHJ4mjKyzfRb",
  "key10": "2zKhXzXVZWTSXtVwFvzqFQBYHDuDt6Vxyi34ey6WqyuBkWG61KZNoH6ijffdqJ95BuS2tuZuX5JVJt1PhYiykJ34",
  "key11": "3aGSVf6VGsNoaicVak4exs14Qnc6myEJj5HHQJQy2mQkzx7PYvXuGgVPkBJSP9uj3SACTbQFVxMu8zrPHytFcqjc",
  "key12": "3diP1od49HbYCY3JVpEoAJojRibE4mUvNaMpH1DAZnQhPm6WhNRzTvohmwEKo4Mj29wYYCV6UxZnSQVs3Up1gf4K",
  "key13": "4b5FNjqJfgEzeM1XwbQkPAmqvLdguzRYUipViusqssHc6kpiz6cExpzULqa14RQg7fzMEFQez6jojv61RcKfPtU2",
  "key14": "5iCuFngxpNbxtZDVaR9wXGDYzhdGaHcVorZtjiivMU11ezU6aCmHE6vQTSgVSmmyVBQvnPVjW2CHXAEcCaZFJSGw",
  "key15": "5mtSKrpQnvWF5pFqLvpL7bAMuYBpEMuULP8SYQaHeMEusEGDvFgfr9R8DhJkAQoymVfuVSNT3rWpDryd13z21DTs",
  "key16": "2g4pRHn7grY5C7REd8wFS1J3ZTAjgXv4zbMQvrW3uASxdTMeqYZqMByV7koKe1Cdo1CCtG3b2hNUZ85uVAfjuXD4",
  "key17": "45iawbg3g5Fj2AN16r2ysZYdRP8AbiJKjvWgw4CMeEd21roGRHEzQwHjxiRJeS7EuWdwHp22akEppQgWeeo4s4HU",
  "key18": "3nSuGXaQ7d1ChxvX7A8pcXFw1fNeSN2n7wLMNJs9Vwr3vBPXgJzmY11oLMYcKPax1FsiLGA6y5V71muswzxrHvLk",
  "key19": "2FPv8iX1cTeCMHEjGc6voDMWk9oiqZREZEuHjvj2kZKGGqmCshaVEHCcjtzuyhzcTQV8Kx2E7n437CAvT2fk9tJT",
  "key20": "RnHXet6CSgR9oFxWR9X8PAncnLhDbnVxM413wTSCbTBS6BZvS3gtQVeCAKm7NFYrxk8YF759xwnvNg4WiHHDvcC",
  "key21": "29su21mkqy8PN7VWCrJKoeyn2n1X7x6y2GtU4nJuWhe7ssYwVLgXjfxrKSTNpTjnXuJmkgNy5EV5z37zhUu9WStW",
  "key22": "3RorUTJgSVaJqssfoCeNowi3rjU1nELCvvWMZjX252Acthfn7V8FHWCASWGMqEwSjQTCd17weiDqnxBZCfBfJE21",
  "key23": "58SW1Cv4H2r32ShzvW6kUh9LtXRsDzAuFK5YGxovFMMeiarGQF2zPcKdBi8TZ49FFSv5cKgDAxD4KUg2ZxsE5phH",
  "key24": "46K4dujGU2eZDQ9DusDQLAykPu1GAku7jZt7JH7feF7bLaiHFcsMApYGd6zCPMdBwE23WeK1MifEHGi4KG5cbxJx",
  "key25": "3cfxmLRLE8BKKDEtD4JZxv6QVgiDfp6p4KzyNqhos4BTLxrpMyq4kGcHKpnJVNFLUqiPNvFQen7tJoc3sVkhxksR",
  "key26": "2EN3T2KRFSkVszD7yUnFSshgvek5FjTmgmprbz7pJSVCzxx7z7ANWuH6KKqCjDUoZonuV472BhvWe8WHcCRg2FyJ",
  "key27": "9KG5CiZoL4u6jm1utpsCazmzRwaUPNKujX1yxgAbcmdtwKNWSuTp5GFaHAvexhbatimhQuci9kJ4AzUujzQMLWz",
  "key28": "aPKUCehnpNoZE6DHCS2WoyVTXpohH9DX6or4AdRNJnnUye66xQzmSMjdC5dTFDeec5Pitfuwrf4jL4xrzwJ1FBW",
  "key29": "3q2bpedeKKBntcjC2Uc4aMj6L7PUTczzWgrMdGemhvAcS1Mthby5an3PtNq59xyiPemwVcMGd3ygXsPhBrGgWDqx",
  "key30": "2GyyGNiNZBjkrFM4MZRTuduT23AV748Bjbc1A345WMVLRhS5vaqvpewtKtCJXK1RojsiQyMckr12Pdb4puXDF2or",
  "key31": "2JitUvU19s7iNZjBfDNcr1mo6Par5NfHwyHxkuPqsWrZbuQBxTtPDQoz8AFqHHoW6YBWQse3DitSu6v1WTNvVdxX",
  "key32": "k5zpFrrsB3crGQEqdQv6Kq3hs9eqWje91c6THKp9xHBMswDDhwy4dbono8peMZoUYECRtM6noEv414j9F1CUse8",
  "key33": "vKswKfSVNoM597ntAHq18zt8UNs4MXknpRN5uqVQxpmfnFuTV4DNBts53coPfLCMacqMPuUGKP8urmEXUTvULbo",
  "key34": "3C34WPv53cF4tWfDC6AVnqt9z2GhFX9gW2s46eBUPGscgJur3omez62j5qkwmsbtb3ASS7KFfRUbTCswdMN2mPsY",
  "key35": "51TcwEN1s1b5esi4vBvhRQXx16kWvqWbaHhixbfdi5SC9jP2Zktke4WiHwA3XfmZj5igQWBeApCX141pu93J8n2M",
  "key36": "2PFgTWMhQhZ4dRzsHPLzK43sVy4hFEZ6grUuWeLyNaLUZPjuEqE91p2XxPM4cK5hLV6Gh1NYpePcXLwAE1KUDPx5"
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
