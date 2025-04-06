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
    "2PVkC7TgSq3yzCFSQt2Ntx8P73aFNswFMAd3W6NAgGU99c8VsjMSZGJ86qCkSnWNfzYoSB2BbA5Z2rJSoHqDj6jJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zjqqkkwiEqNJgumjKxFxJs37Pgs67hdEGJpoEvamc684o8Dp48obietFcJPcUpfXmTfZidkwCv6WcA2MkqTo16a",
  "key1": "27v1GjeaMS99VdxF2nC9xt5eBd1VT3guomXV2u6rMs8fQe1us71SDSRquYwPt2Z6HJiwczJpe5prAYA341McrvzE",
  "key2": "sLfaS1ENDvUgSsetkR9SQ4yUNHyNfeZn8s7BedrG6hsmAFod4jpkgGyt9jcDJdwJiwDfHW2VtPb6hwMPbn6Fepf",
  "key3": "5Eq1jeRARWqYXndMa8vfjXpcxq1pACMCpyupYzVp7mZx6ZJ9T6Jvg6rLui7q2jnZ1TkHN9rzatpzy7iMvT4SaheV",
  "key4": "3dT7DGxecd7JTnE8SWMnvmPXFP5uTc9kyzXoAjNmknra76Z2zfkpm3JmgQjCgEp4Hxz1nDbsSxb3dnJeCc4HceDt",
  "key5": "ur77zYJ2amAkx5fhmsRkB5qaVeF3eUSYtogX3EAaUy1QVuGd53hoAt7vUJ8qmWPnQCNZyw4NLDRn1YannDECfxF",
  "key6": "2zmSDaXVneAuJdff3XHKwxe2NYrW3JUAWgPuS4YRjwTrgefitR8vq9GPXMGpgSwqjc9snkUnuVQuDguvjjZRG4U3",
  "key7": "2aYYBQKM8t4vRCivTYMEYB38uWHNMvfNBeiSU2RxGHpC71egxuUquv12csybXhDwKER7USydmEj2JEHZLJwqy4Xu",
  "key8": "3C7c2WtULjsYRpRxQhzivogMKfMhnkoWd9ch2zCYytueBbv5suWa6vG4Cdd66G6syC7zKAaEFqBHX1sFfuyvLQLQ",
  "key9": "42NnjkwyzK6fm6KhUNKMcaHQwkkn2WkdZ5cv41YeoZWojq7wdhea6K3ShnWtRKtWFyWRczNCrfhoy7pDmHo3VNmp",
  "key10": "3pbfxp1hbmC1pBx96VQgUPkxhR6QxMpDGoGxx433KJLJ4Kx6xSs1HrzAc8arREUEVPRoh4ZbdtQCN3nWDP7gQAFW",
  "key11": "4Griz8ZSpdyFocVHtBLmTW1fa7zyL9PqsT1UmxVfchd9NrQYVcaLwNVSJTKjRibWnHmwjah6XHht8jWKam28axym",
  "key12": "pwMcqAVQCvAvHetDWwAH2kzgHSh3PUSpwnwTT8RtAQBco5hQwrWieWjevJ9FgcDpnoS7c7v8jAmLRipQZTHHTqk",
  "key13": "3DpMqqZ7H8fr88h3a3KbPMm6V7Ahhdj7VTAUnVXbC6ZaLpndPACxcSuYstWU5BQRYbAg6uFAdB9i6g4CMtBdSHT6",
  "key14": "5j6TXaL7eNuoVscH8repxsUGrxYfC6gw7S93aJviHeScTssrATB1MFHnUeLFBCftB8EyAjXpgY62yvLdr4stFJxe",
  "key15": "5vfJGUcSvpSNK5rubhTvQq2WTFcE2Xpj8HTvznbPyApktLxAD3o5Ey1rgTt76W6TdSirdV4RBse4rmywYC6tCQLP",
  "key16": "59UJB8Be2R4Ab4XYFxgfRKqVuLz1LyerTRFZyrPyouySCqCDFdoyHJMtygidWhTXdCURxDcrqDVtk7eT9L9GHtyM",
  "key17": "4744NyWCEMhYmZJudZ1H63xX3LgJxGWgPRN8qiKowQ6vhwPsmF2UX9smZwqYxAQvGGr2E3UwX1RdXkpm4mHGRezx",
  "key18": "5nofJFzBhjZF2QFj2qabi65ipJQSCCMP5CGXmBT7pFDcHTkTd8nbAXLvLkzKsaxkaS2Z4SY7vNzr3ihGTN6CJHZc",
  "key19": "2MjhSJb9NJhxgqNe5n465tUH6DMf3ePoicj6oFebPdK3TnhffUdrPKzdTYWYjh7Xfkg9WT6d6x1217PArreSyLb8",
  "key20": "2cPMU1y9PAZ8EJXYSMSAmkwkQs4ZHjeRc694RpyVu53ZSinebqiLkdSTxpDZww5q33HHscZ9ZSuuMoCtmWt7PeBP",
  "key21": "2siRY2q3uFtdCqEfy6ckCgrC6wGRTZLuX47b4x3YmHu3MuGdYqNBzhRRCkGTYwGpCd9kBgThGTsXLbmXehqCoBBX",
  "key22": "3s38p3LDnyNwanH6YcHeJjc6TykZ1LR8HHkT94BTKVbqS1ndPqXox4Uh7Hmd6547mfTzmUNc2rycnpoWW5tk539E",
  "key23": "2H2ktAHM4ofwnGKA8nUQSfPWaSQgtkmBtowNF8QAXmtwm8o5uKxxsDczZjyv9hN6JT7nNjityDYPshQ7Yw4ugnKB",
  "key24": "5tFbuh3cy6XPoXG9LL9PSgy9iPdVVLyrVP6GbnsNgagJ6zaPV62ugGzzjPbdZf1FAC3bUanJ7Hj3aQe7KpehgLdZ"
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
