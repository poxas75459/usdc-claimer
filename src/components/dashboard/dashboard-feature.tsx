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
    "3x4mU5viDuTsNDs8KcQ4eBSKANVq3QquWZQjGG5yzAzg1GHX3N2hMHSNM3Tra38oLvTX8exowAhFGz6Lbn2eahDe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3E3kpvTripZS2W9zELWLvv13ejR8ADcJdxHyGeZvqmbW5nR7vR1Mt5KNhE4n9L8V3V9tmCEkspj3PqAgtm5MC9Tb",
  "key1": "5yvHnSVmGocrcySxZE9tYHP5pJ79TCqbV1yiSbgjuz4CHk5Js73CXudzkPHojsP3uo2YP2x9F6d834zSKQ4GpcmJ",
  "key2": "5bMGJqkuyg9UsxCG76XgVFogDk2b4hUSWuiS8UYHAze3dLLRyoWTMG7XydF6YC3EZDMWgKB8riQcsDhrpYvTnGFw",
  "key3": "3kC1jN6TWnhJnGcfiCGjkvRHk75P5EbQ3cfY22Gp8TzAqBDajJmg5L4mrdugUUexpsQx8ip5tzBhQRP423Ljv5m3",
  "key4": "2kfraf7bBJHnAWREenaokYmuoa2RzQXbMzNyja1iVZAP2SesVNoUZxZkF17t8u3614LcbFisTcV9fFNCnGrmh2bE",
  "key5": "HPWriJUjw5NKvUqiy24j2WNmRm2ENUo4DyUPQiwVZYYkKLK5sZeDPzn68g29d8XxX82dWYjUrn9ZkHKtetiBBG7",
  "key6": "5ESmHYceiCy5GSQN754a3cLkbBfjkhkNZscNrv9dnt3m9UVrctZNfK3xkFnThUpE5ZMCNWfxkCEbq9KEH932UMr5",
  "key7": "8xoZQQjkPbetCtjESjFvtLZNMms9Ty9za8dhiL4gpEoTqyY483mkbb25SLdfKpo9p8XauWKnuyUBNjothnS53Sa",
  "key8": "4McPdyqsoNNFx4dfE6P7JKzH3xRTgP5e4aG5En3x7TbVBLvJa1b3YFSk8SpUFuATxgMCmbjgvDVJhPFYEPm7uZb7",
  "key9": "XZCs8drCyLSP9s3eM2qFDATrXxPgJx8eqCgq29dxgRvvvXc8DK7poWtVYNjoBp63A4oxQN58TM5vVTkzxxRnfR5",
  "key10": "6E5XRnbcecMTDzjB7CHMwuGPz7ywszcmnkS9z3L1guEz5ZQvUg2jzivuTq9DSVUNaiKj9auGQ8TthUDkT2VBGyR",
  "key11": "27ayNEKk7skYheaSCucEBEMp6dPoZSVr8Nkgqd7ecRu5hhpKwpKFdctt9uKBGpPj1sZBhrsLj6nBhDfRRkKhdrwU",
  "key12": "4JbUUNp7kiLpSTYzfJAddtMv48ZfPfr4FQ29ENbrLumEgLzqMERDTM1SHSackrctrJNyKqn4gjAWi5zpUYRKioSW",
  "key13": "5C4iVQffnPapYcs5apgZS8iRN4t1jfCi33Lypzc16Y9zdcgn6ZnuvKzAvoPtUp74AXErsUvSrHwgjWM4wk4uLoyV",
  "key14": "cpsx7Wzsogv31dPMfcFXf2atprvucbKbmPojjcqwcEjUhiq5UnrpNqfZThaWVnZgVKGQS36WwMz1NdQMcysbKUP",
  "key15": "3P5zqmxZokBJqk1prmyZGwkfDigjCoZyeyLkFT22WZvcWSTZoX4HqLSNwqA4Z6cYhzb6ghi78FnJVMNPGzNKZy8D",
  "key16": "6eUmnyKUD1xxCCofsQnN8QpPFH2jfxEWcT8MNVEG4LwaWsHVCbxYpP3yjMZZaD53Eyo1ZXhbRtbHaA9hBFL8qAd",
  "key17": "K9tAQcsxtgH4536HQNm2CRm9F5GATNkc8svEpteJ5teZXwaZvyvEd4XH1CPif5EBiTEaE5AiFH8ajJXN9ertmek",
  "key18": "4xykM5a8stnoz2fvWfUe6sjZKPgUJ9UtQzjQ3jVPwgJjXemzVQnv4wjnkBsUsGXjtGUha66UnVeRFN1HefuosSDe",
  "key19": "2vdxCUfG947ntsWJ45BZuWSZv9TYB5YwqMQHFi77FAKMNRQy7wp9qowGTWZsTmKjFMQRR8yWgtronLGqtG5nmmpQ",
  "key20": "5You7UPysPpxUXsL7mZDFXJZQLpkWqK55UxxETnQNFWsXcHgkFmG3uov8H8us67XLqjqvoXJhGAreXA4RtmwymK6",
  "key21": "4LsVTDXgrotd2fMWhzhSZ69YiGHYgLS4d9GEF6M3fqYDmbVnk4gcBt3gpgMfgQH9uCP3Hmfz31nRm6jsVV974dXi",
  "key22": "2Mp4967s2QoxvCzCbvRHsujtPVtczLF3TS48T2RjWhLedatmFeMEud1AcDgxqi4NZGcvbFLxCCZsH9kRTgJgcREw",
  "key23": "21HshReSZAuL6ok1vpBZVfWCs7MQTGXm7WvFG8TXm2tgUGq2T1Nt1dwNGaBcFEskzmwRZYwqSCsYKJt3VEK9Zz9G",
  "key24": "XEv5PWrgCmc86cCXhmUFb1rWir2WfWgZcGiA5n7oFzq9sqBCVF6Z29nQE43jEWyAwiTJv52DT7kU4ofG9owgy3U",
  "key25": "3QDr6yxj3fnJCqufiVzyGoRD1yvgjK3iuQJzGGKr6wfDEVMuhuSZgfwvvZCBri42SkWVhwrQkrsPU1sngyqHHYY3"
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
