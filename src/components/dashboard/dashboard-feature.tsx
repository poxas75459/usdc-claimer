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
    "2LN2X5SF7PLHVkojeZwcn6VKKmbFHaZDeJ4yMetipTDG3NvKeUnA4uC4tfbyisUzGs3P4mZQXQBjCPubjeTfgXCa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3L8dm3NmgjmYQjqS4odFPbeuDX8NWPb1u2rkueADaKGTfw16KjEW9HG3JbVqKZitXZSZ5WZcuEAVYRcgEdVCbVQn",
  "key1": "2PEm9XiAuDL8fuEdA36nxtPGUxPDMVWKLvrkxWqg83vHkVnvTPUnDHaEqR4Pg7BcdA8x8fQdTAwibTLbhyP5v6TE",
  "key2": "5ZfNCPNdcwz3iaRbB9Q4Cz9eBEYJ6cQ4HMT44xpmCr1sXiDL68dePc3nEpw6wgFJM9kfCXtBUumpZLAV5j8avsqL",
  "key3": "3g5UrAhWbADYEGpgUhumWuu7PiSze7cgBQKuBDoPbgs2aAVx1xnCciraNaXhVPsudUqwZUMvqn3WdL1wvh8N8HDW",
  "key4": "2xMBJ4BQ8t7QzWNou2LeW77o98aF8NJyRY6q1DJgeGAmSuVRK79ssAcSeMf8t3M8U4jAhCy4zTHK5bCphYFqrhsG",
  "key5": "3yEDoxSxTqG2d55SrUL81rjyL9XCKY2pDX8aAK6WjVdumsByVnmnsHDXeSWDjiWDRM5mQ1RFEVpGEQgA4nBtRHPr",
  "key6": "2PSzqpzMtSrtqKnY5ZgS2VnHZNV7zXLVCwPRvx7EyKsKmFunCsAM4qCGWhk2dk14ez48RNGqYtUG1ZvUuUyBeEQY",
  "key7": "5SSHPjBuRMXjvwsmtCnGiBqwa4TrhNsGyrZWMBpgrDvuT4vcHeNiTzJSxbmsacsgAbwnNovxyNP5SsPoR7Avpfj9",
  "key8": "5cgrj6VMGrv9sm18SVoMPfV1CA5x46qCbK2HfRSboFyJqyiTq6AGps6ogoKkRJ8bo1oneB6rp3kSn96C129GJUe",
  "key9": "5X9csu2dYeQBFPAQhDXB5bFpp93dsYMTCe3sCLHceksuqN8EvTP9FheMomQQs3orZvxLLQnzunL2qWYkBbLXXRoN",
  "key10": "Fw6x7BnDYZfqz9852fviLLm7ehAcw5PbVVJUFyZg1PPYVT4fCmc2EBpCc5YwB8GNqe5d5paG43PobeRAxRMRLWS",
  "key11": "622uw6H4RKJEVtc8kJ4vayA1m9JxGhAJ1fDb3c18BU15FvPPLo1VU81zFxJKJb6BN4FAXkGjRYTu19vCSCqobUjE",
  "key12": "tbjSqfjYGGhNSBXRfrmBLR6cwVL6kz46YwfuFhmFft794TxNsg2E7svrmBUx6564Z5VGrqRmh1SqhqmyxrHuTau",
  "key13": "3dXAFdyhuU2Kf1H8veH82527owF7pbJ5dj9Q7F49JcdpfBwgjQHVrUY2o1iAnT7MZ3xQi5o8uvPJcjp6bbLTWuLr",
  "key14": "3SYTD7ssARfncrGJUZxcESFeRFBCZg7eXfhQ1Mwkk5uF9Tbmg6BDoWC672GbBbwPLDi6LTbym9GNHSe8tgVYk4Tz",
  "key15": "HGuJY2n1j6LPmmGP6umtvYiJwVjz97tNR83vwHNCQyFbdV6cxdu5hqpqFnBM131bMuPEZdtnyWySikFsRVtDQCU",
  "key16": "4v7GYtphhHRt7CAN96gCZLZyyvK9bVy9kJEgsnVvxoR6twpZZoKZURo8fEb3ykh7jQRJZQxhi4hHhKW67zVwqWCN",
  "key17": "3RGXaAuzk6Wv6EEFpjg8FtzHdctyhSrs8BYdkzDe3sPCmdteypmMkaax4k3RBoExJh2SoeeCuc1GzpBopr8TSWRk",
  "key18": "RjjndLEHer9nzq2m2tydQnoajKoSaprxZUasHYoRBzp3pdAvFPTt1DiTtDUVbgSAxL87kN9VQPXnAG8TP3hgieB",
  "key19": "6523EPN2sFK3tQNGsdmSvJyUtu37BccFyo9cYZnjDwWSxv1arhcPisj4dff1e7RjUtEVzNUQxRPhYzUvMxvjEJkS",
  "key20": "2yGpyCoqHwj9vWMKbWD8AyiPbahLFVjzboHxnDYvCaAxVHD3EjFB9GstwWn4Pon1RXByuF5qF9LbX2LA3MXboqVY",
  "key21": "2eVHNPXGzwfPkuj7ha5CJ3kX7r1t3DPM7CbgDAayWkfJyoYedof4NYp1i5Lqkrd4GWFptVFYisBBhLj44F7EuPKZ",
  "key22": "64RTzACDF8WJyjrr3XXSMor9a7PkqYPeFyyV93ezkXjNXFS3j31G1R9fwhegGcpTxDVJDuBy996ZjqPjhyy5L86U",
  "key23": "4woPa7eBf78bgzsu9mbrFpgryZJRojVCpx4Uk66VqqoMEJ89R9gRznkaC9TkR45Wbkc966myKHCJgV4bNQXuK9jH",
  "key24": "3yVXR2SgM1rCBeA99JiBpnkTtUojyfdPsd7GSYWD9WCn3H4SNjWmPeeKNCFK1ZbDuKoNZa5VQiaEQMaA6SagpoQ5",
  "key25": "4L1r3jc8UgrmTyGdGDTrmtgDUgwJGejLzBJZKJeAUXXQht7y7ZfpaEX3DcYyTyJvWQB47rhr5Jjqz7ZVbJeNHjXF",
  "key26": "28LgHc9tKQD9ioSSPdM11nxkKiJSTdqYQTRFHKWSFuUcLKAZDLue7rEKc2jtFWxyhraKzQh6VjCgeDQMfYUJUbiu",
  "key27": "2RHmQDmBKiipAyok1k51qYgFTuP736meh48iJzNiQMgKsHNnCQsPHCdCdQ6ri31PFAY2wtKjrP1K1ZWe5qfcBiww"
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
