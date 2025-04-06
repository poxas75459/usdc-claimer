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
    "2fjdYTkakeHBHNwoNhRAUN9anC7SaHW3kHA22ErW38EEooqmpGfa9WpnnADncW3bcR9p1dpmnCYukPRnSnrruRhW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ShiWq23UhJpp7TJyMGQd6CVsJuYSxxXiEBkkZWL5ZtS9QN5f9ieeAVfe8USLisgEmZ84FR4p9mcqht5GUdY5fhx",
  "key1": "51wW5zmkW7Fo4vZ17c6CT6f3PyTBkJiRLeG81qg373huSiWCHGGtXfw6ddDN3f35N4JcBv2wq6T9WdG2LKkuTWbR",
  "key2": "32v4EfaGUhQHLYWoxiGFv8HvdKhvMbGpcf4YnFeogtty37PXmSMtQKMJoWKC1uE5H5X6M62JFTqHZT8v5qXcqh3R",
  "key3": "5uaRqjgRFQFqXDDwSE5QvuC3MT9MAtWuJKfWfU3NyeCuKVG12NRq6zjpyssG54pVVtcBugGKdjGADvHVoxRPifb6",
  "key4": "3x8uG5PjMTaCMPn7pUybPDxN4KCbi64z1SM1fHUcpCa1pRziretEbAiKmnyiXJqTSvMCLUKfdbd9EmLScXnvkpNE",
  "key5": "As9RXeUtt5HMEfucsd2TFUqqSTCzyAgyfY6zudsRoSQModqctXBcxS4g4UtNzZWZMPT7BLK7P4VcX4q6aLfzih3",
  "key6": "3kHkZmpsFKj15SxBY34tCMEiP65hvNxNRUgY6D8CxsgzZqiSwAD7SkDmPWBMvgaV5LT6fpez6vJEtACFgsZns24Z",
  "key7": "WjX9EmXPgEiEAWik2xmckAuofGot5zgtrNxzSRFbfqJsdHgy8j4etCJpXN4FVnfbPRPviJxBq7gtYBeg43wRXp9",
  "key8": "Xd9gTSEjGfT1oCHrLaoq8YcE9uJBmZE9fYVceYsmUSkWCUE6KaATpbXeNfYQrp3r6dMTcaK7XRgfjkBHnCjKDns",
  "key9": "4qjd7LX41gvxADZgHdbLdWMu6f3bGwqfpzcAKuM92E3yFcPmsUUp1dxPZ76rt3qyb7Ju6HVW48xcSXPakPY4NwEi",
  "key10": "4GmayNrMUjKauHXTSgdgev7DvNBXprBY1Un4aGvjP3bprNcQtoRztAy5HkfpH7Tdy1dRQwoNcpxc2NRjTxV29B4X",
  "key11": "aUeovpq2TQ8KFRMsTBa8KREH717XK223RWBv6Yh5arE16hiBiCXiEA92WvkCWEoCcRePJpHxFT96G5tKJzjrcHu",
  "key12": "4AR3VSWBMLd8bhmeVW2fKETd2My1jbV9fxCizx1ofvFuENNxdtkA1wPa397BpHJ9kvsFjH2S6AeCiZyxk8dRGSnV",
  "key13": "3KG5MqcAiuykMgjUwHL51RvG9yETR55rU7PRXzBWiCX8oNSuZXZGncFqSngHTYhMe94ERTKduFpjkwZkav9kt5nF",
  "key14": "4UbFUnNftNN2QqBH7au8QgaqtWx7ByGeUstqXDm3awiTuLtwuGz1Yuv2dARtsFnGGKzNjpp4dzSoTkWNrR6ecDTL",
  "key15": "4CPuNqP9iuouPrR1wHCwBpv9eCryqAC8PiS6KYkiLgtBjaqhBoQAyspyXiW4AiRZDzrSYrLiUKRsxj2Uwfj39RVV",
  "key16": "2j6ctnpvaXRihs3ETwJdMaZUNRLQwDPjRXw8RMftTaqDPWKe91uxviFYnUGs5hwtha4V7QxirCfGqSnKuSJraNep",
  "key17": "3k7Z3rmKMDBmEbYfLDuTizo1Ef1UV63irSbzxzcMyeUDueAtPFQyuxKkxVmQFuDqL4NX1YFwttvthMHqa5E2DtXT",
  "key18": "AAUaTMktAH37GLHYaamN1aSdJ2x6QgE544YbXEynKFU6CDdCkkn69KYUptQrHh97ViPna3VotwZUTMqGfXa3DWf",
  "key19": "mborRbfDcQWLjNKoLUYNsjJKM7yPwjeofPRmPDmxbWpohpKQ76AYYaBcVJZtcLLWsF1atPv5ajTC9TVz7YPLFCC",
  "key20": "32nD2CZrGr9KLuX43cF8GnjbVoEQnvVCVEBC1Kbq1r7BNhHiVUFuVv9RHPmEjtEfDF7NJ5jpkQncFM6pGsvEDqAZ",
  "key21": "5HRtF14FoMw5Fbt8m1SJj7QcYRheVuSpn5mHMEjnU3CN1Z3WJoHP8kRufGN8XuHHLk77PZ9L4t4kQGv38e42Kj5j",
  "key22": "gerngtPEjzvHH9hRfc8yFfKArKGCfn8zX3FrJSvH1VywZFXcCktF2zUgwaic6Utx3LGaxGyzUSDbstijzSk5W5Z",
  "key23": "4QLL3WdQuRF3MEHFS5eAZeVdsCCCe8RhZcM7y1e8yVgzeCHXN1R8G7PDedv5s7aC5FeaUe7eMZvDo11D9puv7Rye",
  "key24": "4rxAQtvmsbCRXT5V4RxTb3sdSjNH6acRgmeyfsx9zTgFoYQZsyxW6riAH5PtHPQ2x8SRgv7TD5adqMFfjjuinvcV",
  "key25": "5W1XTLdSHiXYHs1MJAotvMNGcenYRpuhddDd3kHuESFu3DYiHQc8aoubXNxZ7FbmGimv1E3KJdDcK5VrD6Zn8Eoo",
  "key26": "3AjvFAzDSurk33aTU239VDhW5ubQPmmHU1tuZCA4yRx5DGSJReGz22Fe4oBVdLPjVkEuWpLsSLZzGVmtHSRyrSr7",
  "key27": "39VH6i4P3Jb9akXoP6oRFWDC5nMJDneLFxyNVn3r818vdF7AvDKuoA9CWfqxCeVz4oLXGNEkD33rBgWweBzZk5h6",
  "key28": "5NoS1UJ9fhBfYAd6Kh4cppJJ9k6eDh9RAJfjB9KYuUj3ecmqbwcTbRNhesmcK2aCkhXDExTbcYJxQ4appCTcS6j6",
  "key29": "7PceqRqc2gb11GpCjmf1Fhefr8k6b3rdwyzzJYdUnsMo1H726rYRezZQPKi569HCGpJKDthUYxBZ1u6YLhifrXv",
  "key30": "vPBZkJxHXgTW86mmddVTpKomjdD7Xdbvax2UUtVmhhxoVSsXzxQWtDoPPNmFNjgkQYYALsFpNacsYWsRkV4aSyY",
  "key31": "5MyJ7z71i44m8QsaSoY9eyEHp8AeLB7FMmopeHHwRygcUVgYTTiDzFdsZALqHmBrnWAh8wCQuR7EhGdw4hwEgLGj",
  "key32": "67ktMK3Zo5fA4upQDiWBzxeAowtGxRG4ihjoRFzx4gNrix6S2NKhn7Uwizw7PgXfUycP3g6X9x4MNKZsdqPDF5aZ",
  "key33": "2SwVS51pVAg28huh2D1dokvDnbqcAQdEbmtSjdk2bM2hZCALKM2Y4AeJWBYxNbxaLYaBzGPjttDovKoD47tx39fV",
  "key34": "3etb8WBmXF7v7PRYwLMAc9JDhAPMoBJ9iKfZ3xZ5Ey33m9vxAaQpzVU2hM22obz72M8s5KjohoAAxghmWcLektTd"
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
