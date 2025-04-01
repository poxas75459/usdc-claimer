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
    "2XSR2WqWjQWFVzebKdkFnvBEwYQ3WDEXjuigFWvQd9H3VoYSNEaLcpERP2HdYhkDaCogcf5VRzCc4hgvJyvsmEy2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Z8hPs6Tz3PSpXh8SmaLAZ23r2N2b8RQRK8cYEeuUHNrsfDD1PtkgwbPRkPGgekuMBpSxT4Gq2VWW8P2fy2ekmbc",
  "key1": "2UUXZ6V5rSPFRrM466HPP1QS7zgDtjBsvfCoaBxXZR3DRzXFLJMNvNdqxbS1TLiM2a8eHnXqj63kb1zQvJGdbhKn",
  "key2": "3SXiQxumgK1Gym24xgBvGKYkC5Poqy5Vyo4QRx2ksJEUNaht4rEZSzhtAQnc65tb8JH95QCAqSU9YqgH7iThM5Ve",
  "key3": "2DHarcvj1vZ3sQRGRvFnjVd7W6KA2XYM5EyfypsLsjBREnUyxLUSyxpLUDCFvCr2TJgY5vxb5VCB4F7xGFW14pGY",
  "key4": "4seofMwVdmjxVbNdctFrfn6pgMN72QZPTqqLZB2tabrpLMU68pdU2tLEKGgFoLCi47CeWhJuniUgqgart85HooVB",
  "key5": "3SfYVMtg9KYn4u8tnyiTU5LCGR6subbouRVterKbcJEqkGPneWG2sr2q3GLNFexBa9BMeX1rgJrSywDUVk56Acub",
  "key6": "3N2jf56J8jZ1EayLR8xitfNZbKyMwyNPCbe12AsuKdmbkWP8X3sa9DzRHpMa4V57TBRVtx2DncpAiPWDVgXhQhvZ",
  "key7": "ExTPDKueGC3LcTm1eiVzedmN9HQv8xkxnY2ecebai1X5R2fboBgU1R7Ywo2s6gQsVx9Xm1LzVVb3F2kcUnUh1eF",
  "key8": "HEHPZDHo3BoQhT5bNRLSCZFaqAuhVYC2DhgtoBHfNDmCYLutZboNdPjiUsVFDbP6TtpCsjaqDackddVWech9tnD",
  "key9": "2Ds4aKrYJyACh3L8Lt1tcAPD4aEc4hhYhaacrSvpne7S7v2dHSs5TWvGtap2fntuNJ6u6qL271tnxhuJ5RWaum4r",
  "key10": "2U22eYr2vXxG9cfk4XhgzVfyxJohWCV2wNNtpLK6TwNmfSwtVUNyGmFT1m1hAMgMvBDoiLVbdfV9cNwaH4anGrRu",
  "key11": "4HabVKPuthjrHC4CzmgdvCs1brcfSb6EbzDXNV4NobtPqDAjuPu8HTwMbd8Sj739rpdmr8CTyUz4x964AvKQ2Kgi",
  "key12": "3edHsyCJUWK9cooNMEGeRUmEQ1fYyLVn9WKUQjNyxY1dHFsAM6huVLkZmRYDvdaiTeff7Cb9n242dYTSh4gkrLyo",
  "key13": "3pPAcdHsDRzps11QUckSstLZGXewQyyEUAq438EtPhWW7jN4w2EWEVhrSdT4UVW7L4ScEqWZAq1SpGAkSAADApPr",
  "key14": "g2LmGS35bEv4NTmdBC6ed3WQfc1NaWsdkkgwiNpSXaSq2x1RALMA15BSxBftqnwN381U7XK8B5rAEtAf9skkhQs",
  "key15": "5mRdv7asbwmzo3mdwDL53gUHk8YN2Vhb3mWVz6NFXjuWYYmcHYSiaCgZi1wh2icoM8AuQoSHJuW848L9zQnpSKxM",
  "key16": "tnsQ74iYRH1F9JyfKMpKxDhJd9gtVbezinWSEGDzEKR6MAwQYJbRUdgVrazLdiyyAmxmHjWLWsGo85Y3B9kt9kV",
  "key17": "fBzkPj45WGsJxdwD5UAujA9q6xLo1ke1xAMMdxTnTyA7mESus1PyzfrkNzeaQy8XHLaXyaCCQfEB4VgKHTGKvXM",
  "key18": "2uzvsoeEtpAw7oV8zbcs6wSjgRBXbbZXworzMnzXLNH9FEvQr8Nn6j1yTu7a61DMjbm9MLVQPbDouYwS5vmMKKb6",
  "key19": "VxKR1rV4vQE2LVKTPaeEgnKYfJ1AuncfaaMSFkeRfoWvFQMxDSJnHrD3wKqWBKvASU5HPBofBiWxkewbuELh8EV",
  "key20": "43HaJH9qRy2A54QdpS7S76NMCAvo2qPmoKeMEDDZQN9MTVfTJynViaoDbNxTEGA8c2go8pGMmew9GmQvXCoxXchA",
  "key21": "yJh81gQKrhboA6gApfntPvBPZWUxw8bEU39q1onsNW6qdnqhGXR2DcZfJLnnTuvdzmzhrPsnvxHuAYhKz6RVKwd",
  "key22": "52sRt6tx4X7MWfr32TtB45zxkqTuAdoshciPDQkztH5xmfS9ZKT9W9Q6pRzJJPCSzahqe8kkQSvafpouNheCEfvg",
  "key23": "cPwPh3LxmKwH5VCtpHxLNV7Mx5npCfCH2wmf2D7GMbs7d1PPAASp9A53HBWfy8NikJ9dm3p7BHKDDmEez65hgAa",
  "key24": "5YmApo4xBqvgmGQjAFSsSqEEJfDwMfZazcwftwV8pbSYq4Tw8RHE1cL2MSWohVaSzNeQ5WwtjVm3UxrjkZdG9WD5",
  "key25": "tV1tH6jZoHhxKD9Y5L9y6FDcME8ugneGmi7LDfNq6u4X36An5sZLP8pHNv197EJ1e1CB8MrCoR84BSuHfdPj7iq",
  "key26": "5v4RndXJcqVk55k3DiLq4bFh8jr3pqqSMbm6CZ6589WX5ZGd2tgWFKRviqwxaRAttabYKzbi6pxztwc7VcWa4Vdi",
  "key27": "5k89rLPxC3BcCUWV579hEyvcNRUpGbfYnDQ7r1EBAw2tfa1FFhFsUXTCSsT2CNppK2N2RTmRp1Hw5tcJKGxhcs85",
  "key28": "21sqHimv5wNW3sAJ5RdxB3fZR5LpeK5LnG9CzW2nLu58dEpQA8PqA2S7rhzB8avGhQsAzdkgpwx73sZyDGdHz9r4",
  "key29": "4wjQcY7EjyqeTpPtRUV3CzBDd2hhKw9bVXVHrESSY42xLy5iB5W2u5eaEPPdFG1prv8NwdkKMRN1uJUaPGQp4iNh",
  "key30": "4RUukjfzu8ok5RvK6qpAScVWEKQWQRcLtt3knsetwzGa4eNSpLk4R1M5ZL1SwZHAJhGU4MbQG1VAx6GjFsecjKBM",
  "key31": "21XLfpQzNykvn8sd9MoUnXSLQpmQhdW69TFpgbEBzu8uhQQL4JxXBB9pAFJnRMuHWY5QyirFNTE8w9cNx8yxLkSx",
  "key32": "3JvSVdDjtVDdQD92nnF9TuqJ5QGEW1AQhsns4krfnAYsCgBjbP4tRurhyUR2Sg7zERAU1zrHHZzm4AJ6RELVeUV9"
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
