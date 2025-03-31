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
    "2AtvzrYAVdAS9JoTZ578gkQGDgp6my7CCqFhQfFgAngh92PSNTmHYRxoxdEqyBWVfW2urrECGUiufY1qTLMUiVzc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Cwfy9GJeMXqmmtdBMoQzvi7YSRxFPAKEag8hGe2SSimXFAmxTcvUytZMGe18VioRrbtsJDwGjucpEPkpfHPujbt",
  "key1": "4cuiiQpyGFM2siqpzZNAAXFRXBqNkpYwQPaRaEVs4DcXumq8Z2TpMD7gMcM4kiYRoyFjofEBFAxVRB5CQjhs1yTZ",
  "key2": "3FhbtqqbMUF4Hon6GRvGDPYoB33npz96EDXWYLjH7cdYgSZ824C2SiXuJ3mBVjtDxBFP1cpVMdH9ztmfbowmEfaz",
  "key3": "3t2kknxnjhAVXTd9A1VntrC23wpVSpGZZXLmWChSeA8yhe6q53MUgtjcLyyAkCDHDNm987gzcd96GAd6KwBgrVQG",
  "key4": "3AfC1gcd1bW4BbyZiuygmrkg7Qi4NncGpuCqccZTVvRHWEZkxV1JWRuAf5nFSmwTqvHvbVAou1LqRwiRAPKYsZoU",
  "key5": "2pUJp6JGF26ZfbMHA8KJpUM1Q9hhgu3q551XsBQqqVZL5dD3UDBviv93iK2CrTsv3aoAFeVNQYdxnqHBtFyEDLx6",
  "key6": "bGh7YiLUorSGxDCBA7o2gAjuAo8D9qXjmpwDvLir4zZvG4KVmxxjAQGbZcgNGWV5cZX9D3mwjqUgqQLC41aDCz8",
  "key7": "3LzxxVRdjqUFaEJymw6kMJL7d8n2kz8Dgs2CoJzNCUTjJTFxsNYEoHaSsNmezRZsgxU8isnPBXJXdsmEvZQ3cRxz",
  "key8": "5rAhvAMF2BodxmLbcV4aPTaENYXVAMuNnvCVkMB3uTSad2y8fjfqmXWXpnpUn7PqpDGGbtNFj1zJbpPJ8fLcdX1q",
  "key9": "5AUoWiPcspzC9c9gG97ZBdSoNMtgBRmV1XJV9p6korgoPfUsewtso9q8g3owsH1a4HdToyQHJBN9isn8Fnbdaj9P",
  "key10": "2NbhcD1HLHDpmU29yEKkGcu2GqqrhzBYXdetNbVbCkMfmLAPN3FkcubtiA4Vv8UpbrghZtMscGCDkkBUxvwEWAq9",
  "key11": "2sPx4XwWAk1ofQtvd2xDUTByqtViyQkDKVxNpyKVJEgeAazupDBd22Yh3Jxza5ByeEe1eUc3F9mpwKqxF786qmne",
  "key12": "LWS4mW1Y1xvcqbK95K5x4hLBAhaESZXMkUS22DHzcEjY4Drrd8teVJNQqekuhzFcfVbhDPhaMbqk2ApSixkpb7t",
  "key13": "oaJteRTLRoTtANyKaV9KFcc1CZ2rpbRgLaYxmH1pqKPCb6gRDmPBjKjP5wf581txoPQvDw35nPqySGhEztZ7kPu",
  "key14": "54wWV1uNAKHBCGqUcbRrsVZAv1ZhGw5ePn2NMhfB6GZRnSHXMH4hPGMCQ3QXyP6BRGfUtuqJCu1Jiih1XCGzkiQ8",
  "key15": "2yrp1Qvxpo2B3LbNzz5xaffCX9siqEUDFkJbZw9rY2Vmj8zscapzAFnobpr5cNXghSgvL4aFuGVQ5DhtJkYQA4LR",
  "key16": "3MZEFqymSXwPfiC6eeCAofVBqdJAXiF1PckHPeHDD8gfPEK1fJBvqbyDdnuVNuJYxxxUqXu227RT2h5VFAmaFZ8c",
  "key17": "sdeYaL44Sh7GwJRT3Vv8Fe5z3EJrmbyg7hywvpvVWjtWRJKxMQf1GKeibVRRThoXWx57XKM7YHMjKh1DJh6FErX",
  "key18": "7doJahTFr5gSfRZ4XCtabaL1F1HM6EGBRDV9XWFEucJaEvkYctu7kEDVBCctG7WuxQqqFw3LpK9jq5oUk6YpXUP",
  "key19": "4wdnyuZyiuHHoVMj8EA7T6JWuqVrvYwF6F66XqaQasF4sDiaugywJ9rJU6sKUUgjFhegzyWRZ6tqJ47fMd37x7ax",
  "key20": "4gstgQCjp23Z89Dez5erUzoKv126duyaHkcPZm8Y5ELY3E7eEdqVLDSXpg3tFTbZnnxQdzudVcoEY5kUvTdLwuou",
  "key21": "5agJzsryaNNhhEbT5KPcVPnLQ4bRyESX78JCJzRPtKhSmd7y1ceR32mA11xbQidTAboYYr3uB4q6taATVAXTcYCQ",
  "key22": "3T6xAz6M52XEzDXTGNDSWjgtU5bGW1ii3uEHPQy3ytXG1VqdrsQho5tmarRw1qmhXMT4kgQpHZnoovii3xQC1JXf",
  "key23": "21sfZfaAcmnDcFDN4SUwo7kvC4fJYjGaVVxC6PopwRSvGL9LgYGjURu6y8ZNt4CTuJSozYLujUFHoeRZnTsdGx1U",
  "key24": "5LAhf1Jv61aLY2pDe3EQbzMAZuY8vNsLvVtYRuZ3pg8eAJsmZYxrParMaU6zkqzH9rc4MKAt93RF4kdmHyBGBRj8",
  "key25": "2VCGzJ1u4KooPsAem8AeEc4qwmSMGQDB19xWV6MSPuumatseshVrtG7tvZWCD8FzKvqJ6QXpGaSgicuqrzvEcowY",
  "key26": "3UfKL3SnBhP32UHpdWxCyQPBuSpumQVUntqYSr5ozHim8rqT7wjJ1G2MmrSeABZh8mEFrX1hpJoiYByQhVXot2fS",
  "key27": "5XjVcbz8qGzEWaqRVduehdXRy5PmuWaX1fwzQVfVqVZKP2ZYffUni2XMcXQPWw4iL9jFoqzeUQS6aB63UVdBGsc",
  "key28": "5ySKWdP8erpaBCJyhCq74nPXA31qJmbHg1QCCFk2bYdwwamemEsWqaDLMJ4XAAdbNn9f6FkLszSNxMVi5r4ZEVmE",
  "key29": "4jn5KeaqeDqfR1M1tXWrY2feseCaYWizpqo67NWjDf52GymyGQHiYV5UHJvw15xydEw5qqEdVWsoQKB3h77vPLkA",
  "key30": "3kuMoSnM1gQRXTrZarqKJuhGq54pw2T8hkGzP8CcxBN3RPu28EyGXd5ELsSYqGjkL5zU7vKmRQj2srpfhVWUSA9h",
  "key31": "2zP7X3frpHRxQGvUZqEz6RnYrJgHY6g64ZWLQsEnB8mumJQBWz3LKSxicwMXZK9PV5zKjAno9HDxtp1h37w64PJX",
  "key32": "4FpBwyMQGFXaYw4eJsiBKnCmunDc8fVXv1snVCK8WcbjU53z51eP1tMWSrT2HN5hMsJ7c328LtjEWf81hzDBJEjq",
  "key33": "45nYbUMVtDbfwq5EqkVGYSoxBRkswEYKXGmQDCP5GzyiRqqQopWiBgW6shnvCUaCxjYf3GGncbkQRhw9GreLwALW",
  "key34": "5bf6eY1Uer5Bx4kkz6CQStfRUk5qi6AbJYLWgdMBEQmvvKGWgumivfaHb2qNNNxtt53dK6tkHRNoY8HVztwZm5im",
  "key35": "4CzMJbexxrkty9ofKi744cFYwFZKQBPbz5V532A4ehkREs7XRoChzp4qWK122mj6MSzVvPsvLiWy5GMqSeMRkqzZ",
  "key36": "3f4EQvMAshNmQFYt34DKP14jbWXyDutE5UqMLu4eegBzhBQuQUEvsmPbPJWqEk5HQKKfUWCa3oC1B2To72m83jGP",
  "key37": "3svbqdQv4ni5qB7hrdgMBCaFGh3txSd2VuEc19jJARZD2V3AW4rVL8xPqNsAGGyCvwV1Dy1prj2wQgsammSfERic",
  "key38": "55UU8npcMeaVKbuuiNbNUK5Ydn3UrTRQdcCuU5YvbahwFpjkCSWF1p7866fgos1i4CjBggeoS8mNamsGJpc2k6V3",
  "key39": "5NAcZfBa5qPZXL9smCrKAkJWvgDUNJYPa64ibvrKDrVy9HFPBdniwJ71MscDRsvxNsrsUm53uBByFJAxL8e2tCiT",
  "key40": "LK4NF8bqsja1L67bToh5BQKsw8EQeGkvbxA1S7fLnRyU6R97ozGHyMi65mg3ZUKA2Ctm9Ddf5xUDuwU7Sq6UEeg",
  "key41": "61bMF2b5zoy92ojaTkqEgNjzDLJuefmEMxoBDYDYuZiT91imMYmBw8egSjKcWRZQPZhUVpoE9BZaAWHfJdiqhS7o",
  "key42": "2oLdTYQmMWevdsMYB6S4DkbcjNVnFkdJ8mcJrimW2TVmYe6TgvpiiLb5fgKvVmn67kPNcrgGmWDRdwjMeKLycurH",
  "key43": "4uv3jrcfpQMgg2bZWyAscLM1vizgXpG2aThKLkAJAsXP4uewf2hvbeXbUtDQ7LSCk19wq2KsEc5aCrSFeB6o7fko",
  "key44": "QvS5v3YjV8EHvbbAYUCpm7yqHSRmuqx3w99S8R39agH91QjsZ8zMrfdHMarVnMnSA2S84hEYgkEoqiYr5Dw2U2n"
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
